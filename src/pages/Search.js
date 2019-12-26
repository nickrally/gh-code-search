import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import InputSubmit from '../components/InputSubmit'
import InputForm from '../components/InputForm'
import CardList from '../components/CardList'

class Search extends Component {
  state = {
    source: []
  }

  componentDidMount() {
      console.log("component did mount")
    //this.searchRepos('RallyTools')
  }

  /* searchRepos(keyword) {
    this.setState({ repos: [] })
    axios
      .get(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(result => this.setState({ repos: result.data.items }))
  } */

  searchCode(repoName, text){
      console.log(" REPO NAME: " + repoName + " TEXT: " + text)
      const url = `https://api.github.com/search/code?q=${text}+repo:${repoName}`
    axios
      .get(url)
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