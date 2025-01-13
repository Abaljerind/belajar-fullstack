const listItems = [
  { id: 1, title: "Eat", done: false },
  { id: 2, title: "Sleep", done: true },
];

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <CheckList />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return <span className="logo">📃 GoCheck ✅</span>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>Tambahkan yang mau kamu catat 🫡</h3>
    </div>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <p style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</p>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>📃 Kamu punya x catatan dan baru x yang di selesai (x%) ✅</span>
    </footer>
  );
}

export default App;
