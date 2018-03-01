import React, { Component } from 'react'

const fs = window.require('electron').remote.require('fs')
const path = window.require('path')

export default class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [],
    }
  }

  componentWillUpdate() {
    this.findFolders()
  }

  findFolders() {
    fs.readdir('./public/images', (err, files) => {
      const res = files.filter(single => path.extname(single) === '')
      this.setState({
        names: res,
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.names.map((single, i) => (
          <button key={`${single}-${i}`}>{single}</button>
        ))}
      </div>
    )
  }
}
