import React, { Component } from 'react';

class MemoryPuzzle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeBlocksShows : 4.5, //4.5sec
            timeUntilLose : 12, //12sec
            maxIncorrectBlocksNum : 3,
            size : 6,
            gridClass : "grid",
            activateClicking : false,
            gridCorrectBlocks : [], 
            correct: [], 
            incorrect: []
        };
    }
    
    generateRandomNumberBetween = (min=1,max=(this.state.size)**2,length = 2*(this.state.size+1)) => {
        var arr = [];
        while(arr.length < length){
            console.log("generated grid");
            var r = Math.floor(Math.random() * (max+1-min)) + min;
            if(arr.indexOf(r) === -1) {arr.push(r)};
        }
        return arr;
        };

    restartGame = (size) => {
        console.log("restarting...",2*(size+1));
        var grid = this.generateRandomNumberBetween(1,size**2,2*(size+1));
        console.log("generated grid");
        this.setState({activateClicking : false, gridCorrectBlocks: grid, correct: grid, gridClass:'grid', incorrect: []});
        console.log("restarting...");
        setTimeout(()=>{
            this.setState({activateClicking : true, correct: []})
            console.log("Restarted")
        }, this.state.timeBlocksShows*1000);
        }
    
    checkWinOrLost = () => {
        if(this.isGameWon()){
            this.setState({gridClass:'grid won', activateClicking : false})
            return "won";
        }
        if(this.isGameLost()){
            this.setState({gridClass:'grid lost', activateClicking : false, correct: this.state.gridCorrectBlocks})
            return "lost";
        }
        }

    isGameWon = () => {
        return this.state.correct.length+1 >= 2*(this.state.size+1);
        }
    isGameLost= () => {
        return this.state.incorrect.length+1 >= this.state.maxIncorrectBlocksNum;
        }

    onBlockClick = (e) => {
        if(!this.state.activateClicking){
          return;
        }
      
        let clickedBlock = e.target;
        
        let blockNum = clickedBlock.id;
        blockNum = Number(blockNum);
        let correctBlocks = this.state.gridCorrectBlocks;
      
        
      
        let correct = correctBlocks.indexOf(blockNum) !== -1;
        console.log(blockNum, correct, correctBlocks);
        if(correct){
            this.setState({ correct: [...this.state.correct, blockNum] });
        }
        else{
            this.setState({ incorrect: [...this.state.incorrect, blockNum] });
        };
        
        this.checkWinOrLost();
        
    }
    
    setSize = (e) => {
        this.setState({size:Number(e.target.value)})
    }

    

    render() {
        const styleGrid = {'gridTemplateColumns': "1fr ".repeat(this.state.size), 'gridTemplateRows': "1fr ".repeat(this.state.size)}
        return (
            <div> 
                <div className='group'>
                    <h2>Size: </h2>
                    <select className="size" id="size" onChange={this.setSize}>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                </div>
                <div className={this.state.gridClass} id='grid' style={styleGrid}>
                    {[...Array((this.state.size)**2).keys()].map(i => {
                            return (<div id={i} className={`block block-${i+1} ${this.state.correct.includes(i) ? "clicked correct" : this.state.incorrect.includes(i) ? "incorrect": ""} `} onClick={(e) => {this.onBlockClick(e)}} key={i}></div>)})
                    }
                </div>
                    
                <div className="button-row">
                    <span className="restart-button" onClick={() => {console.log("restart clicked");this.restartGame(this.state.size)}}>Restart</span>
            </div> 
        </div>
        );
    }
}

export default MemoryPuzzle;
