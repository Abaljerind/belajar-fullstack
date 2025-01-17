import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function HomePage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((post) => post.title.includes(value));
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  // useEffect(() => {
  //   console.log("ada post baru");
  // }, [posts]);

  // useEffect(() => {
  //   console.log("rendering...");
  // });

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => {
        return <Article {...props} key={index} />;
      })}
    </>
  );
}

export default HomePage;
