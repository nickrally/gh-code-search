import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'

class CardList extends Component {
  render() {
    return (
      <div className="resultlist">
        {this.props.items.map((item, index) => (
          <Card
            key={index}
            link={item.html_url}
            name={item.name}
            repo={item.repository.full_name}
          />
        ))}
      </div>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default CardList