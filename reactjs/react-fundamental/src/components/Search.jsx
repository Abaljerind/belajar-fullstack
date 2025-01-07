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
      <small>Ditemukan 0 data dengan kata {search}</small>
    </>
  );
}

export default Search;
