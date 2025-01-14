import { useState } from "react";
import Item from "./Item";

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

export default CheckList;
