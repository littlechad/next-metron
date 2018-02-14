module.exports = {
  webpack: (config) => {
    const conf = config
    if (conf.resolve.alias) {
      delete conf.resolve.alias.react
      delete conf.resolve.alias['react-dom']
    }

    return conf
  },
}
