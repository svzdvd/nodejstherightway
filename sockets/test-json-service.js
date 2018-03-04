'use strict';

const server = require('net').createServer(connection => {
    console.log('Subscriber connected.');

    const firstChunk = '{"type":"changed","timesta';
    const secondChunk = 'mp":1520179550028}';

    connection.write(firstChunk);

    const timer = setTimeout(() => {
        connection.write(secondChunk);
    }, 100);

    connection.on('end', () => {
        clearTimeout(timer);
        console.log('Subscriber disconnected.');
    });
});

server.listen(60300, function() {
    console.log('Test Server listening for subscribers...');
});