# whatsdown

A Typescript library for interacting with the WhatsApp web multidevice API.

### motivation

I was looking into how can I programmatically interact with WhatsApp. They don't have an API. People have tried spinning up puppeteer instances but they get blocked. 

I stumbled upon this idea of reverse engineering Whatsapp's websocket layer, which if done correctly, is equivalent to running Whatsapp web in your terminal, but without the need for a browser and getting blocked.

### features

[ ] - Login via QR code
[ ] - Receive messages
[ ] - Send messages

### license

[MIT](./LICENSE)
