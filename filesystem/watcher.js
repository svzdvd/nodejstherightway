'use strict';
const fs = require('fs');

const filename = process.argv[2];
if (!filename) {
    throw Error('Specify a file name!');
}

fs.watchFile(filename, () => console.log(`File ${filename} changed!`));

console.log(`Now watching ${filename} for changes...`);
