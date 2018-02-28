import React, { Component } from 'react'

const electron = window.require('electron')
const dialog = electron.remote.dialog

export default class FileSelector extends Component {
  openDialog(properties, callback) {
    dialog.showOpenDialog(properties, file => {
      if (file) {
        callback(file)
      }
      return
    })
  }

  render() {
    return (
      <button onClick={() => this.openDialog(this.props.properties, this.props.selected)}>
        {this.props.children}
      </button>
    )
  }
}
