import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App'
import SearchForm from '../SearchForm'
import { render, queryByAttribute } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

it("finds buttons in SearchForm by id", ()=>{
    const getById = queryByAttribute.bind(null, 'id');
    const dom = render(<App />);

    const addRepoButton    = getById(dom.container, 'add-repo-button');
    const removeRepoButton = getById(dom.container, 'remove-repo-button')
    const searchButton     = getById(dom.container, 'search-button');

    expect(addRepoButton).toHaveTextContent("Add another repo")
    expect(removeRepoButton).toHaveTextContent("Remove")
    expect(searchButton).toHaveTextContent("Search")
})