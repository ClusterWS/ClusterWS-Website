---
sidebarDepth: 2
---
# Server

## Installation

Run below command to install **ClusterWS** server package in to your Node.js project:

```js
// Current version is alpha 7

npm i @clusterws/server@4.0.0-alpha.7

// Below installation will not work correctly 
// as new version has not been released yet
// npm i @clusterws/server
```

## Server Configurations
ClusterWS provides simple way to configure and scale your application. 

### worker (required)
* Type: function

Worker function is a place which will contain most of your application logic.

```js
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  worker: Worker
});

function Worker() {
  // here goes your application logic
}
```

### port (optional)
* Type: number
* Default: 80 (non security)/ 443 (security)

Specify on which port will ClusterWS server run.

```js
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  worker: ... ,
  // this will run server on port 3000
  port: 3000
});
```

### host (optional)
* Type: string
* Default: null

Specify on which host will ClusterWS accept connections.

```js
const { ClusterWS } = require('@clusterws/server');


new ClusterWS({
  worker: ... ,
  // accept connections only on 127.0.0.1 
  host: '127.0.0.1'
});
```

### mode (optional)
* Type: enum
* Available: `Mode.Single`, `Mode.Scale`
* Default: `Mode.Scale`

This option allows you to specify in which mode you want run ClusterWS server.

* `Mode.Single`- whole server will run in a single process without any scaling, all options for scale will be ignored.
* `Mode.Scale`- server will use scale options to determine how many processes needs to be run.

To use this option you need to import `Mode` enum from `@clusterws/server` server.

```js
const { ClusterWS, Mode } = require('@clusterws/server');

new ClusterWS({
  worker: ... ,
  mode: Mode.Single
});
```

### websocketOptions (optional)
* Type: Object

Parameters:
* `engine`: (optional, string, default `@clusterws/ws`)
* `wsPath`: (optional, string, default `null`)
* `autoPing`: (optional, boolean, default `true`),
* `pingInterval`: (optional, number, default `20000`),
* `sendConfigurationMessage`: (optional, boolean, default `true`)

This option is object which is responsible for websocket configurations allows to specify on which path will websocket be accepted enable or disable ping pong, how often send ping and if on connect send configurations to the client.

```js
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  websocketOptions: {

    // currently engine allows only `@clusterws/cws` (fork of uws) or `ws` (node js WebSocket library) 
    // if you are selecting `ws` you have to install it before using with `npm install ws` command. 
    engine: 'ws'

    // will accept websocket only when they connect to ws://url:port/hello
    wsPath: '/hello', 
    autoPing: true,

    // will send ping every 10s
    pingInterval: 10000,

    // will not send configuration message to the client on new connection
    sendConfigurationMessage: false
  }
});
```

### loggerOptions (optional)
* Type: object

Parameters:
* `logger`: (optional, object, default `Logger`),
* `logLevel`: (optional, enum, default `LogLevel.INFO`, available: `LogLevel.ALL`, `LogLevel.DEBUG`, `LogLevel.INFO`, `LogLevel.WARN`, `LogLevel.ERROR`),

Logger Options allow you to pass your custom logger (any should fit like Winston, Pino, etc) or to specify log level in internal logger.
Internal ClusterWS logger is very basic logger without any transport and any cool features. If you really need proper logging replace internal one with
(Winston, Pino, or any other which should fit)

```js
const { ClusterWS, LogLevel } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  loggerOptions: {
    // This will set default log level to debug,
    // note that if you provide custom logger you should set
    // log level inside of that custom logger
    // below option is used only for internal ClusterWS logger
    logLevel: LogLevel.DEBUG
  }
});


// Example of custom logger usage
const logger = require('pino')()
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  loggerOptions: {
    // This will setup default logger to Pino
    logger: logger
  }
});
```

### tlsOptions (optional)
* Type: SecureContextOptions (from node.js `tls`)

Parameters:
* `key`: (optional, string, default `null`)
* `cert`: (optional, string, default `null`),
* `ca`: (optional, string, default `null`),
* `pfx`: (optional, string, default `null`)
* `passphrase`: (optional, string, default `null`)

This options enables `https` and `wss` for your server. 

**Note:** better way to handle `https` and `wss` would be by setting up proxy server such as Nginx in front of you Node application.

```js
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  // Your application should be accessible from https and wss now
  tlsOptions: {
    key: fs.readFileSync('./path-to-your-ssl/server-key.pem'),
    cert: fs.readFileSync('./path-to-your-ssl/server-cert.pem'),
  }
});
```

### scaleOptions (optional)
* Type: object

Parameters:
* `scaler`: (optional, enum, default `Scaler.Default`, available: `Scaler.Redis`, `Scaler.Default`)
* `workers`: (optional, number, default 1)
* `restartOnFail`: (optional, boolean, default false)

* `redis`: (optional, `node_redis` configurations, default `null`)
* `default`: (optional, object, default TODO: finish writing this part)

By using `scaler` option you can select which module do you want to use to scale your application,
currently only `redis` and `default` are available, to configure each of them you will need to pass configurations to 
`redis` and/or `default` (please note only one of then can run at the the time).

**To use redis you will need to install `node_redis` with `npm install node_redis`**

```js
const { ClusterWS, Scaler } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  scaleOptions: {
    // Select default scaler will use options from `default` object,
    // swap it to Scaler.Redis to use redis and options from `redis` object
    scaler: Scaler.Default,

    // Will run 2 workers
    workers: 2,

    // Configure connection to redis 
    // (is not used if scaler is not set to Scaler.Redis)
    redis: {
      // more options are available in `node_redis` module 
      host: 'localhost',
      port: 6379
    },

    // Configure default scaler 
    // (is not used if scaler is not set to Scaler.Default)
    default: {
      // will run 1 broker
      brokers: 1,

      // Manually set ports on which brokers will run 
      // (if not provided those ports will be set automatically)
      brokersPorts: [5555]
      // TODO: write rest of the options
    }
  }
})



```





## Socket
Socket section

## Pub/Sub
Pub/Sub section

## Middleware
Middleware section











<!-- This will disappear -->
<!-- ## Examples

Create very simple single instance server:

```js
const { ClusterWS, Mode } = require('../../dist/index');

new ClusterWS({
  // mode Single will run server in single instance without any scaling
  mode: Mode.Single,
  port: 3001,
  worker: Worker
});

function Worker() {
  const wss = this.wss;
  const server = this.server;

  wss.on('connection', (socket, req) => {
    // this will be triggered when 
  })
}

``` -->


