import React, { Component } from 'react'
import styled from 'styled-components'
import { view } from 'react-easy-state'
import ImageStore from '../stores/imagestore'
import Container from '../components/container'

const fs = window.require('electron').remote.require('fs')
const path = window.require('path')

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: ImageStore.getCat(),
      value: '',
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <div>
        <Container>
          <h2>Search</h2>
          {this.state.names.map(single => <p key={single}>{single}</p>)}
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={this.handleChange} />
          </form>
        </Container>
      </div>
    )
  }
}

export default view(Search)
