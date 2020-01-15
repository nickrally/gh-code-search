import React, { Component } from 'react'
import fetchResults from '../api/Api'
import SearchForm from '../components/SearchForm'
import CardList from '../components/CardList'

class Search extends Component {
  state = {
    source: []
  }

  searchCode = async (term, repos) => {
    for (let repo of repos){
      let url = `https://api.github.com/search/code?q=${term}+repo:${repo.name}`
      const results = await fetchResults(url)
      this.setState({ source: this.state.source.concat(results.data.items) })
    }
  }

  render() {
    return (
      <div>
        <SearchForm searchCode={this.searchCode}/>
        <CardList items={this.state.source} />
      </div>
    )
  }
}

export default Search