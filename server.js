const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')

const express = require('express')
const nextjs = require('next')
const { env, port } = require('./config')
const routes = require('./config/routes')

const api = require('./server/api')

const dev = env !== 'production'
const app = nextjs({ dev })
const handler = routes.getRequestHandler(app)

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true })
  } else {
    next()
  }
}

app
  .prepare()
  .then(() => {
    const server = express()
    if (!dev) {
      server.use(compression())
    }
    server.use(bodyParser.json())
    server.use(cookieParser())
    server.use(ignoreFavicon)

    server.get('/_healthz', (req, res) => {
      const health = {
        ts: new Date(),
        pid: process.pid,
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        status: 'ok',
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify(health))
    })

    server.get('*', (req, res) => handler(req, res))

    api(server)

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      /* eslint-disable no-console */
      console.log(`> Ready on http://localhost:${port}`)
      /* eslint-enable no-console */
    })
  })
