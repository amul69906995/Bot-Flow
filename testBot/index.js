
const { Client } = require('whatsapp-web.js');
//used to convert the token into qr
const qrcode = require('qrcode-terminal');

// Create a new client instance
const client = new Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    // console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});
//listening to any incoming message useful while debugging
client.on('message_create', message => {
	console.log(message.from==='xxxxxxxx@c.us',message.body);
});
client.on('message_create', message => {
    setInterval(()=>{
       if(message.from==='xxxxxx@c.us'){
        client.sendMessage(message.from, 'hi this side shubham raj this is a test message of a whatsapp bot!!!!!');
       }
    },10000)
});

// Start your client
client.initialize();
