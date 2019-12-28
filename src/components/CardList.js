import React, { Component } from 'react'
import Card from './Card'
import "../style.css";

class CardList extends Component {
  render() {
    return (
      <div className="resultlist">
        {this.props.items.map((item, index) => (
          <Card
            key={index}
            link={item.html_url}
            path={item.path}
            repo={item.repository.full_name}
          />
        ))}
      </div>
    )
  }
}

export default CardList