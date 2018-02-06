const bodyParser = require('body-parser')
const chalk = require('chalk')
const express = require('express')
const fetch = require('node-fetch')
const next = require('next')

const port = parseInt(process.env.NODE_PORT, 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.get('*', (req, res) => handle(req, res))

    server.post('/call', (req, res) => {
      const {
        Authorization, method, path, payloads, qs,
      } = req.body
      const headers = {
        'Content-Type': 'application/json',
      }
      const uri = `https://swapi.co/api/${path}`

      const options = {
        method, headers, qs: qs || {},
      }

      if (Authorization) {
        options.headers.Authorization = Authorization
      }

      /* eslint-disable no-console */
      console.log(`${chalk.blue('[API CALL]:')} ${chalk.green(method)} ${chalk.white(uri)}`)
      console.log(`${chalk.green('[BODY]:')} ${chalk.green(JSON.stringify(options))}`)
      /* eslint-enable no-console */

      if (method === 'GET') {
        Object.assign(options.qs, payloads)
      } else {
        options.body = payloads
        options.qs = qs
      }

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
