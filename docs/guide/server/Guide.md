---
sidebarDepth: 2
---

# Guide

## Installation

Simply run below command to install **ClusterWS** server package in to your Node.js project:

```js
npm i @clusterws/server
```

## Configurations

To use this configurations simple pass it inside of **ClusterWS** instance:

```js
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  // all configs should go in here
});
```

### worker (required)
This is your actual worker function which will be scaled across all processes, all your main logic will go in there:

```js
const { ClusterWS, Mode } = require('@clusterws/server');

new ClusterWS({
  worker: Worker,
  mode: Mode.Single
});

function Worker() {
  // here will ho all your logic
}
```

### mode (optional)
* Default `Mode.Scale`

This option allows you to specify in which mode you run ClusterWS server, available options `Mode.Single`, `Mode.Scale`.
To use this option you need to import `Mode` enum from `@clusterws/server` server:

```js
const { ClusterWS, Mode } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  mode: Mode.Single
});
```

* `Mode.Single`- whole server will run in a single process without any scaling, all options for scale will be ignored.
* `Mode.Scale`- server will use scale options to determine how many processes needs to be run.


### websocketOptions (optional)
* Default `{ wsPath: null, autoPing: true, pingInterval: 20000 }`

This option is object which is responsible for websocket configurations allows to specify on which path will websocket be accepted enable or disable ping pong, and how often send ping.

* `wsPath` (optional) (string) - specifies on which path server will accept WebSocket connections
* `autoPing` (optional) (boolean) - specifies if you want clusterws automatically handle ping, pong (recommended to leave it on)
* `pingInterval` (optional) (number) - specifies how often would you like to send ping to the clients

```js
const { ClusterWS } = require('@clusterws/server');

new ClusterWS({
  worker: ...,
  websocketOptions: {
    // will accept websocket only when they connect to ws://url:port/hello
    wsPath: '/hello' 
    autoPing: true,
    // will send ping every 10s
    pingInterval: 10000 
  }
});

```









<!-- This will disappear -->
## Example

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

```


