import React, { Component } from 'react';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board:{
                1:"",
                2:"",
                3:"",
                4:"",
                5:"",
                6:"",
                7:"",
                8:"",
                9:""
            },
            turn:"X",
            win:false
        }
    }
    
    IsWin = (board) => {
        if(board[1] === board[2]=== board[3]){return board[1]};
        if(board[1] === board[5]=== board[9]){return board[1]};
        if(board[1] === board[4]=== board[7]){return board[1]};
        if(board[2] === board[5]=== board[8]){return board[2]};
        if(board[3] === board[5]=== board[7]){return board[3]};
        if(board[3] === board[6]=== board[9]){return board[3]};
        if(board[4] === board[5]=== board[6]){return board[4]};
        if(board[7] === board[8]=== board[9]){return board[7]};
        return false
    }

    onClick = (e, turn) => {
        
    }

    render() {
        return (
            <div> textInComponent </div>
        );
    }
}
