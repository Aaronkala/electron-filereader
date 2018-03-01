import { store } from 'react-easy-state'

const ImageStore = store({
  uncat: [],
  cat: [],
  setUncat(arr) {
    this.uncat = arr
  },
  removeUncat(name) {
    const newUncat = this.uncat.slice()
    this.uncat = newUncat.filter(item => item !== name)
  },
})

export default ImageStore
