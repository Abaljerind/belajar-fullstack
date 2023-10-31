const fs = require("fs");

// membuat file baru dan isinya
// fs.appendFile("mynewfile.txt", "Hello Content! How are you?", function (err) {
//   if (err) throw err;
//   console.log("Saved");
// });

// menambahkan isi text baru kedalam file mynewfile.txt diakhir filenya
fs.appendFile("mynewfile.txt", "\nThis is my new text!", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
