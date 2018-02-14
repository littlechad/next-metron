module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT,
  apiHost: process.env.API_HOST,
  server: {
    host: process.env.SERVER_HOST,
    call: process.env.SERVER_CALL,
  },
}
