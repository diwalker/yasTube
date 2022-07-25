const express = require('express')
const app = express()
const ytdl = require('ytdl-core')

app.get("/", function (req, res) {
        const {  url  } = req.query;
        
        res.header("Content-Disposition", 'attachmentt; filename="video.mp4"')
        return ytdl (url).pipe(res);
});

app.listen(3000);