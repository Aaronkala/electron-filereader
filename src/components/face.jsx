import React, { Component } from 'react'
import styled from 'styled-components'
import { view } from 'react-easy-state'

import ImageStore from '../stores/imagestore'

const fs = window.require('electron').remote.require('fs')

const Img = styled.img`
  width: 100%;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
`

const Container = styled.div`
  padding: 0;
  margin: 5px;
  border: 1px solid black;
  width: 8em;
`

export default class Face extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.removeImage = this.removeImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // currently can't readd image, because it still is on page but just hidden
  // add callback and remove from original array
  removeImage(name) {
    fs.unlink(`./public/images/${name}`, err => {
      if (err) throw err
      ImageStore.removeUncat(name)
    })
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit(name) {
    fs.mkdir(`./public/images/${this.state.name}/`)
    fs
      .createReadStream(`./public/images/${name}`)
      .pipe(fs.createWriteStream(`./public/images/${this.state.name}/${name}`))
    this.removeImage(name)
  }

  render() {
    if (!this.state.deleted) {
      return (
        <Container key={`${this.props.item}`}>
          <Img src={`./images/${this.props.item}`} alt="selected" />
          <Flex>
            <input
              onChange={e => this.handleChange(e)}
              value={this.state.name}
            />
            <div>
              <button onClick={() => this.handleSubmit(this.props.item)}>
                Submit
              </button>
              <button onClick={() => this.removeImage(this.props.item)}>
                x
              </button>
            </div>
          </Flex>
        </Container>
      )
    }
    return null
  }
}
