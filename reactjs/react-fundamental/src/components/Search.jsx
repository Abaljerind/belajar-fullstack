import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    props.onSearchChange(e.target.value);
  };

  return (
    <>
      <div>
        Cari Artikel : <input type="text" onChange={onSearchChange} />
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan kata {search}
      </small>
    </>
  );
}

export default Search;
