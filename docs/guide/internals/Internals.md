# Internals

Need some more work !!!

## Protocol

ClusterWS is based on websocket Protocol but it also uses internal protocol to communicate between client and server.
We are using very simple data format to do not add big overhead to the messages. 

ClusterWS protocol is an array which contains `3` field `[type, event, data]`.

* `type` can be: `e` (emit), `p`(publish), `i`(internal message).
* `event`: `any` mainly represents channel or emit event name.
* `data`: `any` data which is passed from the user.

#### Example:
If user executes event `send` from the server with data `"Hello world"` to the `"World"`

```js
socket.send("World", "Hello world");
```

This will be the message which we need to send to the client library:

```
["e", "World", "Hello world"]
```

## Ping Pong

Ping Pong does not use above protocol as it is not necessary to `decode` or `incode`. It is always send as binary format which is 
`0x9` for ping and `0xA` for pong. As ClusterWS uses `AppLevel` ping pong Client is responsible for catching `ping` on message event and responding to server with `pong` (reason is that JavaScript browser websocket does not expose `ping` and `pong` events).

#### Simple example Ping Pong handle in Browser:

```js
socket.binaryType = 'arraybuffer' // Do not forget to set to `arraybuffer`
socket.onmessage = function (message) {
    if (typeof message.data !== 'string') {
        let buffer = new Uint8Array(message.data);
        if (buffer[0] === 57) {
            // should send  an array with [0] === 65
            return socket.send(new Uint8Array(['A'.charCodeAt()]));
        }

        // process with your binary data
    }
    // process with your string data
}

```