const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let query = url.parse(req.url, true).query;

    if (query.fullName) {
      res.end("halo " + query.fullName + ". Saya Jeri." + "\n");
    } else {
      res.end("selamat datang!");
    }
  })
  .listen(8080);
