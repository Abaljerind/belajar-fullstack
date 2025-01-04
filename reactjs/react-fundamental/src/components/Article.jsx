function Article() {
  const name = "Naruto";
  const titles = ["Naruto shippuden", "One Piece", "Bleach", "Eyeshield 21"];
  return (
    <>
      <div>Namaku adalah {name}</div>
      <div>
        {titles.map((title) => {
          return (
            <>
              <div key={title}>{title}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Article;
