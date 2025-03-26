import { WebSocket } from 'ws';
import { randomBytes } from 'crypto';

const clientId = randomBytes(16).toString('base64');

const ws = new WebSocket('wss://web.whatsapp.com/ws/chat', {
    origin: 'https://web.whatsapp.com'
});

ws.on('open', () => {
    console.log('connected to WhatsApp Web');
});

ws.on('message', (data) => {
    console.log('message received', data);
});

ws.on('close', () => {
    console.log('disconnected from WhatsApp Web');
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

(async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
})();
