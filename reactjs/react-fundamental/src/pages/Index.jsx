import posts from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input type="text" onChange={changeSearch} />
      </div>
      <small>Ditemukan 0 data dengan kata {search}</small>
      {posts.map(({ title, tags, date }, index) => {
        return <Article title={title} tags={tags} date={date} key={index} />;
      })}
    </>
  );
}

export default HomePage;
