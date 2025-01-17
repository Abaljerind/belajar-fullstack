import "./index.css";
import data from "./data";
import { useEffect, useState } from "react";

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
  return <h1 style={{ color: "mediumslateblue" }}>Warteg Mang Udin</h1>;
}

function Menu() {
  const foods = data;
  // const foods = [];
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2 style={{ fontSize: "32px", color: "mediumslateblue" }}>Menu Kita</h2>
      {numFoods > 0 ? (
        <>
          <p style={{ fontSize: "20px", color: "mediumslateblue" }}>
            Aneka makanan Indonesia yang ada dan tersedia di Warteg Mang Udin! Buka Senin - Minggu 🚀
          </p>
          <ul className="foods">
            {foods.map((food, index) => {
              return <Food foodObj={food} key={index + 1} />;
            })}
          </ul>
        </>
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

  const [jam, setJam] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setJam(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} jam={jam} />;
  } else {
    return <FooterClosedHour jamBuka={jamBuka} jamTutup={jamTutup} jam={jam} />;
  }
}

function FooterOpenHour({ jamBuka, jamTutup, jam }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warteg Mang Udin | Jam Buka {jamBuka} - Jam Tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
      <p>Jam: {jam} WIB</p>
    </footer>
  );
}

function FooterClosedHour(props) {
  return (
    <footer className="footer">
      <p>
        Silahkan datang di jam {props.jamBuka} - {props.jamTutup}.
      </p>
      <p>Jam: {props.jam} WIB</p>
    </footer>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;

  return (
    <li className={`food ${stok ? "" : "sold-out"}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <h4>{stok ? `Rp${harga}` : "Habis"}</h4>
      </div>
    </li>
  );
}

export default App;
