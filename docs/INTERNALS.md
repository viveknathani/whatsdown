# internals

A lot of the content here is taken from [here](https://github.com/sigalor/whatsapp-web-reveng).

## connecting

1. Open a websocket connection with `wss://web.whatsapp.com/ws/chat` with the HTTP header, `Origin: https://web.whatsapp.com`.
2. Generate a random 16 byte base64-encoded string. This is your `clientId`.
