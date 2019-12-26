import React, { Component } from 'react'
import styled from 'styled-components'

class Card extends Component {
  render() {
    return (
      <div>
      {this.props.repo} <br />
        <a href={this.props.link}>
          {this.props.name}
        </a>
      </div>
    )
  }
}

const Container = styled.div`
  flex: 1;
  flex-basis: 15%;
  margin: 15px;
  padding: 5px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
`


export default Card