import "./index.css";
import data from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Warteg Mang Udin</h1>;
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      <ul className="foods">
        {data.map((food, index) => {
          return <Food foodObj={food} key={index + 1} />;
        })}
      </ul>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 22;

  // if (hour < jamBuka || hour > jamTutup) {
  //   alert("Warteg Mang Udin Tutup");
  // } else {
  //   alert("Warung Mang Udin Buka");
  // }

  return (
    <footer className="footer">
      {new Date().getFullYear()} Warteg Mang Udin | Jam Buka {jamBuka} - Jam Tutup {jamTutup}
    </footer>
  );
}

function Food(props) {
  console.log(props);
  return (
    <li className="food">
      <img src={props.foodObj.foto} alt={props.foodObj.nama} width={100} height={70} />
      <div>
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <h4>Rp{props.foodObj.harga}</h4>
      </div>
    </li>
  );
}

export default App;
