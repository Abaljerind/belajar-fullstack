function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1>Warteg Mang Udin</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Menu Kita</h2>
      <Food />
      <Food />
      <Food />
      <Food />
    </div>
  );
}

function Footer() {
  return <footer>{new Date().getFullYear()} Warteg Mang Udin</footer>;
}

function Food() {
  return (
    <div>
      <img src="../food/soto-betawi.jpg" alt="Soto Betawi" width={100} height={70} />
      <h2>Soto Betawi</h2>
      <p>Soto Betawi dari Jakarta</p>
    </div>
  );
}

export default App;
