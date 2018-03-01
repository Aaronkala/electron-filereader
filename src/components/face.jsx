import React, { Component } from 'react'
import styled from 'styled-components'
import { view } from 'react-easy-state'

import ImageStore from '../stores/imagestore'

const fs = window.require('electron').remote.require('fs')

const Img = styled.img`
  height: 5em;
  width: 5em;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
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
        <Flex key={`${this.props.item}`}>
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
          <Img src={`./images/${this.props.item}`} alt="selected" />
        </Flex>
      )
    }
    return null
  }
}
