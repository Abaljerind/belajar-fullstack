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
  const foods = data;
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 && (
        <ul className="foods">
          {foods.map((food, index) => {
            return <Food foodObj={food} key={index + 1} />;
          })}
        </ul>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;

  const isOpen = hour >= jamBuka || hour <= jamTutup;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            {new Date().getFullYear()} Warteg Mang Udin | Jam Buka {jamBuka} - Jam Tutup {jamTutup}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Food(props) {
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
