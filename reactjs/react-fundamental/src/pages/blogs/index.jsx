import { Link, useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  return (
    <>
      <h2>My Posts</h2>
      {posts.map((item) => {
        return (
          <p key={item.id}>
            <Link to={`/blog/${item.id}`}>
              {item.id}. {item.title}
            </Link>
          </p>
        );
      })}
    </>
  );
}

export default Blog;
