const routes = require('next-routes')()

routes
  .add('room', '/:username', 'room')
  .add('followers', '/:username/followers', 'followers')
  .add('followings', '/:username/followings', 'followings')

module.exports = routes
