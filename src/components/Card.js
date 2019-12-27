import React, { Component } from 'react'
import styled from 'styled-components'

class Card extends Component {
  render() {
    return (
      <div className="result">
      {this.props.repo} <br />
        <a href={this.props.link}>
          {this.props.name}
        </a>
      </div>
    )
  }
}

export default Card