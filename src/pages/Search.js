import React, { Component } from 'react'
import axios from 'axios'
import fetchResults from '../api/Api'
import SearchForm from '../components/SearchForm'
import CardList from '../components/CardList'

class Search extends Component {
  state = {
    source: []
  }

  searchCode = async function(repos, searchText)  {
    for (let repo of repos){
      let url = `https://api.github.com/search/code?q=${searchText}+repo:${repo.name}`
      const results = await fetchResults(url)
      console.log("RESULTS ARE HERE!!!", results)
      this.setState({ source: this.state.source.concat(results.data.items) })
    }
  }

  searchCriteria = (queryParams) => {
    this.searchCode(queryParams.repos, queryParams.searchText)
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