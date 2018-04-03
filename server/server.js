const express = require('express')
const ClusterWS = require('clusterws')
const { Nuxt, Builder } = require('nuxt')

new ClusterWS({
  worker: Worker,
  host: '127.0.0.1',
  port: 3000
})

function Worker() {
  const wss = this.wss
  const server = this.server

  const app = express()
  const config = require('../nuxt.config.js')
  config.dev = process.env.NODE_ENV !== 'production'

  const nuxt = new Nuxt(config)
  if (config.dev) new Builder(nuxt).build()

  app.use(nuxt.render)

  server.on('request', app)
}
