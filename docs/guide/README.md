# Overview

**ClusterWS** is a Node.js Server framework for building **scalable** WebSocket applications without any hassle. 

ClusterWS official supports client libraries for:
* [Java](https://github.com/ClusterWS/ClusterWS-Client-Java).
* [Swift](https://github.com/ClusterWS/ClusterWS-Client-Swift).
* [JavaScript](https://github.com/ClusterWS/ClusterWS-Client-JS).

<!-- ClusterWS officially support Java, Swift and JavaScript (browser and server) clients. -->

<!-- Add Pictures of Client libraries with  -->
<!-- <p align="center">
    <a href="https://github.com/ClusterWS/ClusterWS-Client-Swift"><img src="https://user-images.githubusercontent.com/18750503/37686010-8ec97d8c-2cfa-11e8-844a-3c79043d3c83.png" width="150"/></a>
    <a href="https://github.com/ClusterWS/ClusterWS-Client-Java"><img src="https://user-images.githubusercontent.com/18750503/37686016-96558d5c-2cfa-11e8-8d91-3a01122a73eb.png"
    width="150" /></a>
    <a href="https://github.com/ClusterWS/ClusterWS-Client-JS"><img src="https://user-images.githubusercontent.com/18750503/37686031-9fa2d888-2cfa-11e8-911e-d844a8753b88.png" width="150"/></a>
</p> -->



### Simple to Scale
To scale between different Processes and Machine ClusteWS uses [Node.js Cluster Module](https://nodejs.org/api/cluster.html) and to 
communicate between different them it utilizes custom brokers/scaler processes which efficiently distribute messages
between all processes and Machines. 

All above is hidden behind very simple interface which provides different scalability options.

```js
new ClusterWS({
   ...
   workers: 8,
   brokers: 1,
   ...
})
// for more options read server documentation
```
<!-- Add some description about pubsub -->


### WebSocket
For WebSocket library ClusterWS uses [CWS](https://github.com/ClusterWS/cWS) (fork of uWebSocket C++ WebSockets library) which gives better 
performance then Node.js WebSocket alternatives.


# This website is for version 4.0.0 which is not yet available