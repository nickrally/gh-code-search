import React, { Component } from 'react'
import Card from './Card'
import Title from './Title'
import "../style.css";


class CardList extends Component {
  render() {
    return (
      <div className="resultlist">
        {this.props.items.map((item, idx) => (
          <div key={idx}>
            <Title 
              repo={Object.keys(item)[0]} />
            {item[Object.keys(item)[0]].map((element, i)=> (
              <Card
                key={i}
                link={element.html_url}
                path={element.path}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default CardList