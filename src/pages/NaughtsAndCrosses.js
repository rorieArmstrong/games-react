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

        }
    }
    
    render() {
        return (
            <div> textInComponent </div>
        );
    }
}
