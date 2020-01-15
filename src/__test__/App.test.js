import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer'
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
}); 
