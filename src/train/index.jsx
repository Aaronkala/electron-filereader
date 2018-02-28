import React, { Component } from 'react'
import styled from 'styled-components'
import FileSelector from '../components/fileSelector'
import Container from '../components/container'
import { saveFace } from '../face-detection/tools'
import Face from '../components/face'

const fs = window.require('electron').remote.require('fs')
const path = window.require('path')

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default class Train extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      image: [],
    }
  }

  selectedFile(data) {
    data.map(single => {
      const loc = path.parse(single)
      saveFace(single, `public/images/${loc.name}`, loc.ext)
    })
    this.refreshFaces()
  }

  refreshFaces() {
    fs.readdir('./public/images', (err, files) => {
      const res = files.filter(single => path.extname(single) !== '')
      this.setState({
        image: res,
      })
    })
  }

  render() {
    return (
      <div>
        <Container>
          <h2>Train</h2>
          <button onClick={() => this.refreshFaces()}>Refresh</button>
          <FileSelector
            selected={data => this.selectedFile(data)}
            properties={{ properties: ['openFile', 'multiSelections'] }}
          >
            Select image
          </FileSelector>
          <ImageGrid>
            {this.state.image[0] &&
              this.state.image.map((single, i) => (
                <Face key={`${single}-${i}`} item={single} />
              ))}
          </ImageGrid>
        </Container>
      </div>
    )
  }
}
