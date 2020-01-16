import React, { Component } from 'react'
import "../style.css";

class Card extends Component {
  render() {
    return (
      <div className="result">
        <a href={this.props.link} target="_blank">
          {this.props.path}
        </a>
      </div>
    )
  }
}

export default Card