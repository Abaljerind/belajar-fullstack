import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((prevListItems) => [...prevListItems, item]);
  }

  function handleDeleteItem(id) {
    setListItems((prevListItems) => prevListItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setListItems((prevListItems) => prevListItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItem={handleAddItem} />
        <CheckList listItems={listItems} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
        <Stats listItems={listItems} />
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
          return <Item item={item} key={item.id} onDeleteItem={props.onDeleteItem} onToggleItem={props.onToggleItem} />;
        })}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.done} onChange={() => onToggleItem(item.id)} />
      <p style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ listItems }) {
  if (listItems.length === 0) {
    return (
      <footer className="stats">
        <p>📃 Yuk buat catatan kamu 😁</p>
      </footer>
    );
  }

  const totalItems = listItems.length;
  const totalItemsDone = listItems.filter((item) => item.done).length;
  const percentageItems = Math.round((totalItemsDone / totalItems) * 100);

  return (
    <footer className="stats">
      <span>
        {percentageItems === 100
          ? "Kamu sudah melakukan semuanya 👍😁"
          : `📃 Kamu punya ${totalItems} catatan dan baru ${totalItemsDone} yang sudah selesai. Status: (${percentageItems}%) ✅`}
      </span>
    </footer>
  );
}

export default App;
