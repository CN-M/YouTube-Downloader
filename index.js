const fs = require('fs');
const ytdl = require('ytdl-core');

const link = 'https://www.youtube.com/watch?v=vqp9yoAP97Y';

function download(link) {
    console.log('Download Start')
    ytdl(link)
    .pipe(fs.createWriteStream('VideoName.mp4'));
}

download(link);