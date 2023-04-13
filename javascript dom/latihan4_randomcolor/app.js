// deklarasi variable untuk button dan h1 di html
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

// deklarasi variable untuk generate random color nya
const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

// membuat addEventListener pada button agar dibuatkan color baru berdasarkan nilai dari generateRandomColor
button.addEventListener("click", () => {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});
