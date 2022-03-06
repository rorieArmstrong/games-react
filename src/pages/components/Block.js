import React, { Component } from 'react';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blockClass : "grid"
        };
        this.allBlocksNum = (this.state.size)**2;
        this.correctBlocksNum = 2*(this.state.size+1);
        this.activateClicking = false
        };
        
    render() {
        return (
            <div id='block' className={`block block-${this.props.index+1} ${this.state.blockClass}`} onClick={this.onBlockClick()} key={this.props.index}></div>
    );
  }
}
