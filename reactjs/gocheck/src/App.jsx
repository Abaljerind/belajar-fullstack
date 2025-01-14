import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";

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

export default App;
