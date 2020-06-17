import React from 'react';
import { render, cleanup } from "@testing-library/react";
import SearchForm from '../../components/search-form';

afterEach(cleanup);

describe("SeachForm", () => {
  it('renders correctly', () => {
    const { asFragment } = render(<SearchForm />);
  
    expect(asFragment).toMatchSnapshot();
  });
  it('renders text input', () => {
    const { getByTestId } = render(
      <SearchForm />
    )
    expect(getByTestId("input-id")).toHaveClass("input");
  })
  it('renders a button', () => {
    const { getByTestId } = render(
      <SearchForm />
    )
    expect(getByTestId("button-id")).toHaveClass("button");
  })
})