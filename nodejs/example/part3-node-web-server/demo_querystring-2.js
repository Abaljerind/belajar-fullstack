const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let query = url.parse(req.url, true).query;
    if (query.firstName || query.lastName) {
      res.end(
        "halo " +
          query.firstName.charAt(0).toUpperCase() +
          query.firstName.slice(1) +
          " " +
          query.lastName.charAt(0).toUpperCase() +
          query.lastName.slice(1) +
          ". Saya Jeri." +
          "\n"
      );
    } else {
      res.end("selamat datang!");
    }
  })
  .listen(8080);

// untuk akses gunakan url ini: http://localhost:8080/status?firstName=naruto&lastName=uzumaki
