const chalk = require('chalk')
const fetch = require('node-fetch')
const cors = require('cors')

const { apiHost, server } = require('../config')

const corsOptions = {
  origin: server.host,
  optionsSuccessStatus: 200,
}

function api(app) {
  return app.post('/call', cors(corsOptions), (req, res) => {
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
}

module.exports = api
