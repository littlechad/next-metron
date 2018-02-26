const bodyParser = require('body-parser')
const chalk = require('chalk')
const express = require('express')
const fetch = require('node-fetch')
const next = require('next')
const { apiHost, env, port } = require('./config')
const routes = require('./config/routes')

const dev = env !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)


app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.get('*', (req, res) => handler(req, res))

    server.post('/call', (req, res) => {
      const {
        Authorization, method, path, payloads,
      } = req.body

      const headers = {
        'Content-Type': 'application/json',
      }
      let uri = `${apiHost}${path}`

      const options = {
        method, headers,
      }

      if (Authorization) {
        options.headers.Authorization = Authorization
      }

      if (method === 'GET') {
        const query = JSON.stringify(payloads.qs)
        uri = `${uri}?string=${query}`
      } else {
        options.body = JSON.stringify(payloads)
      }

      /* eslint-disable no-console */
      console.log(`${chalk.blue('[API CALL]:')} ${chalk.green(method)} ${chalk.white(uri)}`)
      console.log(`${chalk.green('[BODY]:')} ${chalk.green(JSON.stringify(options))}`)
      /* eslint-enable no-console */
      return fetch(uri, options)
        .then(response => response.json())
        .then(response => res.json(response))
        .catch(error => res.status(500).send(error))
    })

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      /* eslint-disable no-console */
      console.log(`> Ready on http://localhost:${port}`)
      /* eslint-enable no-console */
    })
  })
