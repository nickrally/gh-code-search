import React, { Component } from 'react'
import styled from 'styled-components'

class Card extends Component {
  render() {
    return (
      <Container>
      {this.props.repo} <br />
        <a href={this.props.link}>
          {this.props.name}
        </a>
        <CardBody>
          <Title>{this.props.id}</Title>
        </CardBody>
      </Container>
    )
  }
}

const Container = styled.div`
  flex: 1;
  flex-basis: 15%;
  margin: 15px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
`

const CardBody = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
`

const Description = styled.p`
  font-size: 12px;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
`

export default Card