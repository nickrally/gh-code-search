import React, { Component } from 'react'
import styled from 'styled-components'

export default class InputSubmit extends Component {
  state = {
    value: ''
  }

  changeValue(value) {
    this.setState({ value })
  }

  submitValue() {
    this.setState({ value: '' })
    this.props.onSubmit(this.state.value)
  }

  render() {
    return (
      <div>
        <Input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={event => this.changeValue(event.target.value)}
        />

        <Button onClick={() => this.submitValue()}>
          {this.props.buttonText}
        </Button>
      </div>
    )
  }
}

const Input = styled.input`
  padding: 10px 20px;
  border: solid 2px #686868;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
  &:focus {
    border-color: #005ad8;
    transition: 0.5s;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  border: solid 2px #005ad8;
  border-radius: 5px;
  background-color: #005ad8;
  color: white;
  outline: none;
  cursor: pointer;
`