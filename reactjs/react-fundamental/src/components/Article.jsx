function ArticleStatus({ isNew }) {
  return <i style={{ color: "red" }}>{isNew && "New Article -- "}</i>; // conditional rendering using component
}

function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        <ArticleStatus isNew={props.isNew} />
        <strong>Tags:</strong> {props.tags.join(", ")}, <strong>Date:</strong>
        {props.date}
      </small>
    </>
  );
}

export default Article;
