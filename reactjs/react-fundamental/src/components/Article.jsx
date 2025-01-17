import { useContext } from "react";
import { GlobalContext } from "../context";

function ArticleStatus({ isNew }) {
  return <i style={{ color: "red" }}>{isNew && "New Article -- "}</i>; // conditional rendering using component
}

// conditional rendering not using props
// function NewArticle() {
//   return <i style={{ color: "red" }}>New Article -- </i>;
// }

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        <ArticleStatus isNew={props.isNew} />
        {/* {props.isNew && <NewArticle />} */}
        <strong>Tags:</strong> {props.tags.join(", ")}, <strong>Date:</strong>
        {props.date}
      </small>
      <div>
        <small>ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;
