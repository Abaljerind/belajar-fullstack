import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((prevListItems) => [...prevListItems, item]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItem={handleAddItem} />
        <CheckList listItems={listItems} />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return <span className="logo">📃 GoCheck ✅</span>;
}

function Form(props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      done: false,
    };

    props.onAddItem(newItem);
    setTitle("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Tambahkan yang mau kamu catat 🫡</h3>
      <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

function CheckList(props) {
  return (
    <div className="list">
      <ul>
        {props.listItems.map((item) => {
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
