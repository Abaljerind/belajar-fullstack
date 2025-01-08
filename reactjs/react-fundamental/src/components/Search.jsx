import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeyDown = (e) => {
    // e.key === "Enter" && onSearchChange();
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari Artikel : <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeyDown} />
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan kata {search}
      </small>
    </>
  );
}

export default Search;
