// create button & container
const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

// tambah addEventListener pada button dan isikan function generateRandomColor
button.addEventListener("click", function () {
  // add backgroundColor pada container
  container.style.backgroundColor = generateRandomColor();
});

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};
