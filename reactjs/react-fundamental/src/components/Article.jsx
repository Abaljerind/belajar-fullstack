function Article(props) {
  return (
    <>
      <h3>Title: {props.title}</h3>
      <p>Tags: {props.tags.join(", ")}</p>
      <p>Date: {props.date}</p>
    </>
  );
}

export default Article;
