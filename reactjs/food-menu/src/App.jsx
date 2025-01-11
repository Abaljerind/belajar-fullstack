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
  // const foods = data;
  const foods = [];
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {foods.map((food, index) => {
            return <Food foodObj={food} key={index + 1} />;
          })}
        </ul>
      ) : (
        <p>Maaf, saat ini kami sedang tutup 🙏</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;

  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterClosedHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function FooterOpenHour(props) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warteg Mang Udin | Jam Buka {props.jamBuka} - Jam Tutup {props.jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterClosedHour() {
  return (
    <footer className="footer">
      <p>
        Silahkan datang di jam {props.jamBuka} - {props.jamTutup}.
      </p>
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
