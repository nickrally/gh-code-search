import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import InputForm from '../components/InputForm'
import CardList from '../components/CardList'

class Search extends Component {
  state = {
    source: []
  }

  searchCode(repoName, text){
      const url = `https://api.github.com/search/code?q=${text}+repo:${repoName}`
    axios
      .get(url, {
        auth: {
            username: process.env.REACT_APP_GITHUB_USER,
            password: process.env.REACT_APP_GITHUB_PERSONAL_TOKEN
          }
      })
      .then(result => this.setState({ source: result.data.items }))
  }

  searchCriteria = (keywords) => {
    console.log(keywords)
    this.searchCode(keywords.repoName, keywords.searchFor)
  }
  render() {
    return (
      <Container>
        <InputForm searchCriteria={this.searchCriteria}/>
        <CardList items={this.state.source} />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Search