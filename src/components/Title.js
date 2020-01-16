import React, { Component } from 'react'
import "../style.css";

class Title extends Component {
  render() {
    return (
      <div className="repo-name">
      {this.props.repo} <br />
      </div>
    )
  }
}

export default Title