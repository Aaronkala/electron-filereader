import { store } from 'react-easy-state'

const fs = window.require('electron').remote.require('fs')
const path = window.require('path')

fs.readdir('./public/images', (err, files) => {
  const res = files.filter(single => {
    if (single !== '.DS_Store') {
      return path.extname(single) === ''
    }
  })
  ImageStore.setCat(res)
})

const ImageStore = store({
  uncat: [],
  cat: [],
  getCat() {
    fs.readdir('./public/images', (err, files) => {
      const res = files.filter(single => {
        if (single !== '.DS_Store') {
          return path.extname(single) === ''
        }
      })
      this.setCat(res)
    })
    return this.cat
  },
  setCat(arr) {
    this.cat = arr
  },
  setUncat(arr) {
    this.uncat = arr
  },
  removeUncat(name) {
    const newUncat = this.uncat.slice()
    this.uncat = newUncat.filter(item => item !== name)
  },
})

export default ImageStore
