import posts from "../posts.json";
import Article from "../components/Article";

export default function HomePage() {
  return (
    <>
      <h1>Simple Blog</h1>
      {posts.map((blog) => {
        return <Article title={blog.title} tags={blog.tags} date={blog.date} />;
      })}
    </>
  );
}
