const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('https://www.youtube.com/watch?v=wvwUM_cjpj0')
    .pipe(fs.createWriteStream('video.mp4'));