import "./index.css";

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
      <Food nama="Nasi Goreng" deskripsi="ini nasi goreng enak" harga={24000} foto="../public/food/nasi-goreng.jpg" />
      <Food nama="Gado Gado" deskripsi="ini gado gado yang enak" harga={24000} foto="../public/food/gado-gado.jpg" />
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
    <div className="food">
      <img src={props.foto} alt={props.nama} width={100} height={70} />
      <div>
        <h3>{props.nama}</h3>
        <p>{props.deskripsi}</p>
        <h4>Rp{props.harga}</h4>
      </div>
    </div>
  );
}

export default App;
