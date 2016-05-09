var express = require('express');
var router = express.Router();
var fs = require('fs');
const url = require('url');


/* GET home page. */
router.get('/', function(req, res) {
  res.set('Content-Type', 'text/html');
  fs.createReadStream('./index.html').pipe(res);
});

router.get('/videos/:video', function(req, res) {
  console.log(req.url);
  const videos   = fs.readdirSync('./videos')
  const urlparse = url.parse(req.url).path;
  const path     = '.'+urlparse+'.mp4'
  const exist    = fs.existsSync(path)
  if(!exist) {
    throw new Error(404);
  } else {
    const VIDEO_SIZE = fs.statSync(path).size;
    res.writeHead(200,{
      'Content-Length': VIDEO_SIZE ,
      'Content-Type'  : 'application/octet-stream'
    });
    fs.createReadStream(path).pipe(res);
  }
});

module.exports = router;
