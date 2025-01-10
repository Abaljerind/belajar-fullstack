import { useState, useEffect } from "react";

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
            {item.id}. {item.title}
          </p>
        );
      })}
    </>
  );
}

export default Blog;
