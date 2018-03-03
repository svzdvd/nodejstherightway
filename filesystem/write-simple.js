'use strict';
const fs = require('fs');

const filename = process.argv[2];
fs.writeFile(filename, 'hello world', err => {
    if (err) throw err;
});