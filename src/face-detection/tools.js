const cv = window.require('opencv4nodejs')
const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2)

export const saveFace = (img, location, extension) => {
  const faces = getFaceImage(cv.imread(img).bgrToGray()).map(single => {
    if (single) {
      return single.resize(80, 80)
    }
  })
  faces.map((face, i) => cv.imwrite(`${location}-${i + 1}${extension}`, face))
}

export const getFaceImage = grayImg => {
  const faceRects = classifier.detectMultiScale(grayImg).objects
  if (!faceRects.length) {
    console.log('no face detected')
    return []
  }
  return faceRects.map(rect => grayImg.getRegion(rect))
}
