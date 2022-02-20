const fs = require('fs');
const ytdl = require('ytdl-core');

const link = 'https://www.youtube.com/watch?v=vqp9yoAP97Y';

function download(link) {
    console.log('Download Start')
    ytdl(link)
    .pipe(fs.createWriteStream('Baby5.mp4'));
}

download(link);
console.log('Download Complete')