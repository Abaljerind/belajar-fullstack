const fs = require("fs");

fs.writeFile("mynewfile3.txt", "Hello writeFile.js!!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
