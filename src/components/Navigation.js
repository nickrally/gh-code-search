import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <Container>
        <Title>Github Search</Title>
        <Menu to="/">Search</Menu>
        <Menu to="/about">About</Menu>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flexbox;
  align-items: center;
  background-color: black;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
`

const Title = styled.h1`
  color: white;
  font-size: 18px;
`

const Menu = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 15px;
`