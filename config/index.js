module.exports = {
  apiHost: process.env.API_HOST,
  aws: {
    media: {
      host: process.env.NODE_ENV === 'production'
        ? process.env.AWS_MEDIA_HOST
        : process.env.AWS_MEDIA_DEV_HOST,
    },
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretKey: process.env.AWS_SECRET_KEY,
    s3: {
      generalBucket: process.env.AWS_S3_GENERAL_BUCKET,
      inputBucket: process.env.AWS_S3_INPUT_BUCKET,
      host: process.env.AWS_S3_HOST,
    },
    transcoder: {
      region: process.env.AWS_TRANSCODER_REGION,
      pipelineId: process.env.AWS_TRANSCODER_PIPELINE_ID,
      preset: {
        mp4: process.env.AWS_TRANSCODER_PRESET_MP4,
        mp3: process.env.AWS_TRANSCODER_PRESET_MP3,
      },
    },
  },
  baseUrl: process.env.BASE_URL,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  server: {
    host: process.env.SERVER_HOST,
    call: process.env.SERVER_CALL,
    signout: process.env.SERVER_CALL_SIGNOUT,
  },
  signedUrl: process.env.SIGNED_URL,
  REACT_SPINKIT_NO_STYLES: process.env.REACT_SPINKIT_NO_STYLES,
}
