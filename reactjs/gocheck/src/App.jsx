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

  function handleClearItems() {
    const confirm = window.confirm("Anda yakin ingin mengkosongkan catatan?");
    if (confirm) {
      setListItems([]);
    }
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItem={handleAddItem} />
        <CheckList
          listItems={listItems}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
        />
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
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    switch (sortBy) {
      case "title":
        return props.listItems.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return props.listItems.slice().sort((a, b) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return props.listItems;
    }
  }

  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return <Item item={item} key={item.id} onDeleteItem={props.onDeleteItem} onToggleItem={props.onToggleItem} />;
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan judul</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>
        <button onClick={props.onClearItems}>Hapus semua catatan</button>
      </div>
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
