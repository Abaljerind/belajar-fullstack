function Article(props) {
  return (
    <>
      <h3>Title: {props.title}</h3>
      <small>
        Tags: {props.tags.join(", ")}, Date: {props.date}
      </small>
    </>
  );
}

export default Article;
