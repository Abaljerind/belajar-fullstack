import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  return (
    <>
      <div>
        Cari Artikel : <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan kata {search}
      </small>
    </>
  );
}

export default Search;
