function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        <i style={{ color: "red" }}>{props.isNew && "New Article -- "}</i>{" "}
        <strong>Tags:</strong> {props.tags.join(", ")}, <strong>Date:</strong>{" "}
        {props.date}
      </small>
    </>
  );
}

export default Article;
