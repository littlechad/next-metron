const routes = require('next-routes')()

routes
  .add('home', '/', 'index')
  .add('_healthz', '/_healthz', '_healthz')
  .add('signin', '/signin', 'signin')
  .add('about', '/about', 'about')

module.exports = routes
