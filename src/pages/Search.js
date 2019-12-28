import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

//import InputForm from '../components/InputForm'
import SearchForm from '../components/SearchForm'
import CardList from '../components/CardList'

class Search extends Component {
  state = {
    source: []
  }

  searchCode(repos, text){
    const config = {
      auth: {
          username: process.env.REACT_APP_GITHUB_USER,
          password: process.env.REACT_APP_GITHUB_PERSONAL_TOKEN
        }
    }
    for (let repo of repos){
      let url = `https://api.github.com/search/code?q=${text}+repo:${repo.name}`
      //console.log(url)
      axios
      .get(url, config)
      .then(result => this.setState({ source: this.state.source.concat(result.data.items) })) 
    }
  }

  searchCriteria = (keywords) => {
    this.searchCode(keywords.repos, keywords.text)
  }
  render() {
    return (
      <div>
        <SearchForm searchCriteria={this.searchCriteria}/>
        <CardList items={this.state.source} />
      </div>
    )
  }
}

export default Search