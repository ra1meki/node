const fs = require('fs');
const zlib = require('zlib');

let readableStream = fs.createReadStream(
    'text.txt',
    'utf8'
);
let writeableStream = fs.createWriteStream('text.txt.gz');

let gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(writeableStream);