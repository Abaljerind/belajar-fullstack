const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // membuka sebuah file diserver dan mengembalikkan isinya
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
