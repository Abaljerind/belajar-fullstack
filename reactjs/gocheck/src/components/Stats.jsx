export default function Stats({ listItems }) {
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
