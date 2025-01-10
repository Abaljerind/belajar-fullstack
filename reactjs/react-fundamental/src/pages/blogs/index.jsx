import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

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
