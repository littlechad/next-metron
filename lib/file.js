import crypto from 'crypto'
import mime from 'mime-types'
import moment from 'moment'

const config = require('../config')

export function getMediaType(mimetype) {
  function isVideo() {
    return 'video'
  }
  try {
    const mediaTypes = {
      video: isVideo,
    }
    const media = mimetype.split('/')[0]
    return mediaTypes[media]()
  } catch (e) {
    return false
  }
}

export function getUrl(filename, postType, mimetype, userId, isThumb) {
  const type = getMediaType(mimetype)
  const path = getPath(postType, mimetype, userId)
  const { host } = config.aws.media

  let url

  if (type === 'video') {
    url = `${host}/${path}/${filename.split('.')[0]}.mp4`
  } else {
    url = isThumb
      ? `${host}/${path}/thumbs/${filename}`
      : `${host}/${path}/${filename}`
  }

  return url
}

export function getFilename(mimetype) {
  const buf = crypto.randomBytes(16)
  return `${buf.toString('hex') + Date.now()}.${mime.extension(mimetype)}`
}

export function getPath(postType, mimetype, userId) {
  const type = getMediaType(mimetype)
  return `${postType}/${type}/${userId}/${moment().format('YYYY-MM-DD')}`
}

export function get(postType, mimetype, userId, isThumb = false) {
  const filename = getFilename(mimetype)
  return {
    url: getUrl(filename, postType, mimetype, userId, isThumb),
    filename,
    folder: getPath(postType, mimetype, userId),
    mediaType: getMediaType(mimetype),
    mimetype,
    isThumb,
  }
}
