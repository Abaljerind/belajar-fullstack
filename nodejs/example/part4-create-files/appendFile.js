const fs = require("fs");

fs.appendFile("mynewfile.txt", "Hello Content! How are you?", function (err) {
  if (err) throw err;
  console.log("Saved");
});
