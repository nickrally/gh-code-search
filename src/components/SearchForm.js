import React from "react";

import "../style.css";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      repos: [{ name: "" }]
    };
  }

  handleInputChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  handleArrayInputChange = (idx) => {
    return (evt) => {
        const newRepos = this.state.repos.map((repo, sidx) => {
          if (idx !== sidx) return repo;
          return { ...repo, name: evt.target.value };
        });

        this.setState({ repos: newRepos });
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { searchText, repos } = this.state;
    this.props.searchCriteria(this.state)
  };

  handleAddRepo = () => {
    this.setState({
      repos: this.state.repos.concat([{ name: "" }])
    });
  };

  handleRemoveRepo = idx => () => {
    this.setState({
      repos: this.state.repos.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <form id="search-form" onSubmit={this.handleSubmit}>
      <h3>Search string</h3>
        <input
          type="text"
          id="search-term-box"
          placeholder="e.g. saas-rally-prod-integrations"
          id="searchText"
          onChange={this.handleInputChange}
        />

        <h3>GitHub Repositories</h3>

        {this.state.repos.map((repo, idx) => (
          <div className="repo" key={idx}>
            <input
              type="text"
              id="repo-box"
              placeholder={`repo ${idx + 1} full name, e.g. RallySoftware/integrations-ci`}
              value={repo.name}
              onChange={this.handleArrayInputChange(idx)}
            />
            <button
              type="button"
              id="remove-repo-button"
              onClick={this.handleRemoveRepo(idx)}
              className="small"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          id="add-repo-button"
          onClick={this.handleAddRepo}
          className="small"
        >
          Add another repo
        </button>
        <button id="search-button">Search</button>
      </form>
    );
  }
}

export default SearchForm;
