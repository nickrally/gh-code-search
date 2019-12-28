import React, { Component } from 'react'
import "../style.css";

class Card extends Component {
  render() {
    return (
      <div className="result">
      {this.props.repo} <br />
        <a href={this.props.link}>
          {this.props.path}
        </a>
      </div>
    )
  }
}

export default Card