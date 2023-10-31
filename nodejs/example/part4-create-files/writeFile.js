const fs = require("fs");

// kode membuat file baru dan isinya
// fs.writeFile("mynewfile3.txt", "Hello writeFile.js!!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// kode untuk update isi file, untuk writeFile() ini isinya akan digantikan.
fs.writeFile("mynewfile3.txt", "This is my new text! XD", function (err) {
  if (err) throw err;
  console.log("updated!");
});
