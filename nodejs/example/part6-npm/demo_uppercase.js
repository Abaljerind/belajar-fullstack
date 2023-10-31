import { upperCase, localeUpperCase } from "upper-case";
const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(upperCase("halo dunia fana!"));
    res.end();
  })
  .listen(8080);

// error, upper-case module nya sudah deprecated, contoh penggunaannya kurang jelas.
