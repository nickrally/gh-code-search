import React, { Component } from 'react'
import styled from 'styled-components'

class InputForm extends Component{
    state = {
        repoName: null,
        searchFor: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.searchCriteria(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="repoName">Repo name:</label>
                    <Input type="text" id="repoName" onChange={this.handleChange} />
                    <label htmlFor="searchFor">Search for:</label>
                    <Input type="text" id="searchFor" onChange={this.handleChange} />
                    <Button>Search</Button>
                </form>
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

export default InputForm;