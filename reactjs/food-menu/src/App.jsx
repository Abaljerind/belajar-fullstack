function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      <Food />
      <Food />
      <Food />
      <Food />
    </>
  );
}

function Food() {
  return (
    <div>
      <img src="../food/soto-betawi.jpg" alt="Soto Betawi" />
      <h2>Soto Betawi</h2>
      <p>Soto Betawi dari Jakarta</p>
    </div>
  );
}

export default App;
