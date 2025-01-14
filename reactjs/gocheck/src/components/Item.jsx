export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.done} onChange={() => onToggleItem(item.id)} />
      <p style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
