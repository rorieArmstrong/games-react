import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
          <button><Link to='/rps'>RPS</Link></button>
          <button><Link to='/mp'>Memory Puzzle</Link></button>
      </div>
    );
  }
}
