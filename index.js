const fs = require('fs');
const ytdl = require('ytdl-core');

const link = 'https://www.youtube.com/watch?v=vrzSFgjBM80';

function download(link) {
    console.log('Download Start')
    ytdl(link)
    .pipe(fs.createWriteStream('video.mp4'));
    console.log('Download Complete')
}

download(link);