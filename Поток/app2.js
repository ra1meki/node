const fs = require('fs');

let writeableStream = fs.createWriteStream('voprosi.txt');
writeableStream.write('Основы Node.js \n');
writeableStream.write('Модули и пакеты \n');
writeableStream.write('Система файлов и потоки (File System and Streams) \n');
writeableStream.write('Асинхронное программирование \n');
writeableStream.write('Express.js и веб-разработка \n');
writeableStream.write('WebSocket и реальное время \n');
writeableStream.write('Базы данных \n');
writeableStream.write('Аутентификация и безопасность \n');
writeableStream.end('Завершение записи');
let readableStream = fs.createReadStream(
    'voprosi.txt',
    'utf8'
);
readableStream.on('data', function (chunk) {
    console.log(chunk);
});