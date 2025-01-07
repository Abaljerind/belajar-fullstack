import postsData from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";
import Search from "../components/Search";

function HomePage() {
  const [posts, setPosts] = useState(postsData);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((post) =>
      post.title.includes(value)
    );
    setPosts(filteredPosts);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map((props, index) => {
        return <Article {...props} key={index} />;
      })}
    </>
  );
}

export default HomePage;
