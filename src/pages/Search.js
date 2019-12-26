import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import InputSubmit from '../components/InputSubmit'
import InputForm from '../components/InputForm'
import CardList from '../components/CardList'

class Search extends Component {
  state = {
    repos: []
  }

  componentDidMount() {
    this.searchRepos('RallyTools')
  }

  searchRepos(keyword) {
    this.setState({ repos: [] })
    axios
      .get(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(result => this.setState({ repos: result.data.items }))
  }

  searchCode(repoName, text){
      console.log(" REPO NAME: " + repoName + " TEXT: " + text)
      const url = `https://api.github.com/search/code?q=${text}+repo:${repoName}`
    axios
      .get(url)
      .then(result => console.log(result.data))
  }


  searchCriteria = (keywords) => {
    console.log(keywords)
    this.searchCode(keywords.repoName, keywords.searchFor)
  }
  render() {
    return (
      <Container>
        <InputSubmit
          repoPlaceholder="Enter repo name"
          textPlaceholder="Enter text to search"
          buttonText="Search"
          onSubmit={value => this.searchRepos(value)}
        />
    <InputForm searchCriteria={this.searchCriteria}/>
        <CardList items={this.state.repos} />
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