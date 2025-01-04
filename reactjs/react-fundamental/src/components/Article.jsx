function Article(props) {
  return (
    <>
      <div>Namaku adalah {props.name}</div>
      <div>
        <p>Berikut adalah nama nama timku:</p>
        {props.titles.map((title) => {
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
