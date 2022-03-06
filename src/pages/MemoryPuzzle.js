import React, { Component } from 'react';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeBlocksShows : 4.5, //4.5sec
            timeUntilLose : 12, //12sec
            maxIncorrectBlocksNum : 3,
            size : 6
        };
        this.allBlocksNum = (this.state.size)**2;
        this.correctBlocksNum = 2*(this.state.size+1);
        this.activateClicking = false
        };

    generateRandomNumberBetween = (min=1,max=this.allBlocksNum,length = this.correctBlocksNum) => {
        var arr = [];
        while(arr.length < length){
            var r = Math.floor(Math.random() * (max+1-min)) + min;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
        };

    onBlockClick = (e) =>{
        if(!this.activateClicking){
            return;
        }

        let clickedBlock = e.target;
        
        let blockNum = clickedBlock.classList.value.match(/(?:block-)(\d+)/)[1];
        blockNum = Number(blockNum);
        let correctBlocks = window.gridCorrectBlocks;

        

        let correct = correctBlocks.indexOf(blockNum) !== -1;
        clickedBlock.classList.add("clicked");
        console.log(blockNum, correct, correctBlocks);
        if(correct){
            clickedBlock.classList.remove("incorrect");
            clickedBlock.classList.add("correct");
        }
        else{
            clickedBlock.classList.add("incorrect");
            clickedBlock.classList.remove("correct");
        }
        
        this.checkWinOrLost();
        
    }

    showCorrectBlocks = () => {    
        document.querySelector(".block").each((i,ele)=>{
            let blockNum = ele.classList.value.match(/(?:block-)(d+)/)[1];
            blockNum = Number(blockNum);
            let correctBlocks = window.gridCorrectBlocks;
            let correct = correctBlocks.indexOf(blockNum) !== -1;
            if(correct){
            ele.classList.add("show");
            }
        });
        }

    hideAllBlocks = () => {
        document.querySelector(".block").each((i,ele)=>{
            ele.classList.remove("show");
            ele.classList.remove("correct");
            ele.classList.remove("incorrect");
            ele.classList.remove("clicked");
        });
    }

    restartGame = () => {
        document.querySelector(".grid").removeClass("won");
        document.querySelector(".grid").removeClass("lost");
        this.hideAllBlocks();
        window.gridCorrectBlocks = this.generateRandomNumberBetween();
        window.activateClicking = false;
        this.showCorrectBlocks();
        setTimeout(()=>{
            this.hideAllBlocks();
            window.activateClicking = true;
            console.log("Restarted")
        }, this.state.timeBlocksShows*1000);
    }

    checkWinOrLost = () => {
        if(this.isGameWon()){
            document.querySelector(".grid").addClass("won");
            window.activateClicking = false;
            return "won";
        }
        if(this.isGameLost()){
            document.querySelector(".grid").addClass("lost");
            this.showCorrectBlocks();
            window.activateClicking = false;
            return "lost";
        }
    }

    isGameWon = () => {
        return document.querySelector(".correct").length >= window.correctBlocksNum;
    }
    isGameLost= () => {
        return document.querySelector(".incorrect").length >= window.maxIncorrectBlocksNum;
    }

    render() {
        this.restartGame();
        return (
            <div>
                <div> 
                    <div >
                        <h2>Size: </h2>
                        <select name="size" id="size" onChange={(prevState) => {this.setState(...{size:Number(this.value)})}}>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>
                    </div>
                    <div className="grid" id='grid'>
                        {[...Array(this.allBlocksNum).keys()].map(i => {
                                return (<div id='block' className={`block block-${i+1}`} onClick={this.onBlockClick()} key={i}></div>)})
                        }
                    </div>
                        
                    <div class="button-row">
                        <span class="restart-button" onClick={this.restartGame()}>Restart</span>
                </div> 
            </div>
        </div>
        );
    }
}
