import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './container'

const electron = window.require('electron')
const fs = electron.remote.require('fs')
const dialog = electron.remote.dialog

const FileContent = styled.textarea`
  width: 100%;
  height: 10em;
`

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default class FileSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      content: '',
    }
  }

  openDialog() {
    dialog.showOpenDialog({
      filters: [
        { name: 'json', extensions: ['json'] }
      ]
    }, (file) => {
      if (file) {
        this.readFile(file[0])
      }
      return
    })
  }

  saveDialog() {
    console.log('save file')
  }


  readFile(file) {
    fs.readFile(file, 'utf-8', (err, data) => {
      this.setState({
        selected: file,
        content: data
      })
    })
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    console.log(dialog)
    console.log('file', this.state.selected)
    return (
      <Container>
        <TopBar>
          <button onClick={() => this.openDialog()}>
            Open
          </button>
          <button onClick={() => this.saveDialog()}>
            Save
          </button>
        </TopBar>
        {this.state.content && <FileContent value={this.state.content} onChange={(e) => this.handleChange(e)}></FileContent>}
      </Container>
    );
  }
}