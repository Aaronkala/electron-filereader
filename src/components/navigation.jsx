import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavBar = styled.div`
  width: 100%;
  padding: 2em;
  background-color: #333;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  a {
    margin-left: 1em;
    text-decoration: none;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    &:hover {
      color: #e6f;
    }
  }
`

export default class Navigation extends Component {
  state = {}
  render() {
    return (
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <div>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/train">Train</NavLink>
        </div>
      </NavBar>
    )
  }
}
