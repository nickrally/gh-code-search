import React from "react";

import "../style.css";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      repos: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ text: evt.target.value });
  };

  handleRepoNameChange = idx => evt => {
    const newRepos = this.state.repos.map((repo, sidx) => {
      if (idx !== sidx) return repo;
      return { ...repo, name: evt.target.value };
    });

    this.setState({ repos: newRepos });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, repos } = this.state;
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
      <form onSubmit={this.handleSubmit}>
      <h3>Search string</h3>
        <input
          type="text"
          placeholder="e.g. saas-rally-prod-integrations"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <h3>GitHub Repositories</h3>

        {this.state.repos.map((repo, idx) => (
          <div className="repo">
            <input
              key={idx}
              type="text"
              placeholder={`repo ${idx + 1} full name, e.g. RallySoftware/integrations-ci`}
              value={repo.name}
              onChange={this.handleRepoNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveRepo(idx)}
              className="small"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddRepo}
          className="small"
        >
          Add another repo
        </button>
        <button>Search</button>
      </form>
    );
  }
}

export default SearchForm;
