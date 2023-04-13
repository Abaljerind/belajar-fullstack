// generate random color dibuat
const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

// buat variable untuk menampung semua button yang ada
const buttons = document.querySelectorAll("button");

// buat perulangan for of dengan addEventListener di dalamnya agar semua button bisa men-generate warna nya masing masing
for (let button of buttons) {
  button.addEventListener("click", () => {
    button.style.backgroundColor = generateRandomColor();
    button.style.color = generateRandomColor();
  });
}

const headings = document.querySelectorAll("h1");

for (let heading of headings) {
  heading.addEventListener("click", () => {
    heading.style.backgroundColor = generateRandomColor();
    heading.style.color = generateRandomColor();
  });
}
