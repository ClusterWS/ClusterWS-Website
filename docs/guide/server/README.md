---
sidebarDepth: 2
---
# Server

## Installation

Simply run below command to install **ClusterWS** server package in to your Node.js project:

```js
// Current version is alpha 3

npm i @clusterws/server@4.0.0-alpha.3

// Below installation will not work correctly as new version has not been released yet
// npm i @clusterws/server
```


## Server Configurations
To configure your ClusterWS server in different ways you can use below option.


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

#### wsPath (optional)
* Type: string
* Default: null

#### autoPing (optional)
* Type: boolean
* Default: true

#### pingInterval (optional)
* Type: number
* Default: 20000 (in ms)

#### sendConfigurationMessage (optional)
* Type: boolean
* Default: true


This option is object which is responsible for websocket configurations allows to specify on which path will websocket be accepted enable or disable ping pong, how often send ping and if on connect send configurations to the client.

```js
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  websocketOptions: {
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

#### logger (optional)
* Type: object
* Default: internal logger

#### logLevel (optional)
* Type: enum
* Available: `LogLevel.ALL`, `LogLevel.DEBUG`, `LogLevel.INFO`, `LogLevel.WARN`, `LogLevel.ERROR`
* Default: `LogLevel.INFO`

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


