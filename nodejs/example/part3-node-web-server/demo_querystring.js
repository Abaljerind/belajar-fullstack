const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    // menggunakan module url untuk mengubah querystring menjadi sebuah object
    let q = url.parse(req.url, true).query;

    // mengembalikkan tahun dan bulan dan hari dari object query yang dimasukkan lewat alamat url-nya
    let txt = q.year + " " + q.month + " " + q.day;
    res.end(txt);
  })
  .listen(8080);
