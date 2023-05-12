const form = document.getElementById("search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // agar saat button diklik tidak berpindah halaman / refresh

  //   untuk merefresh / menghapus gambar dan nama film nya setelah kita cari bisa dengan code berikut
  document.querySelectorAll("img").forEach((img) => img.remove());
  document.querySelectorAll("p").forEach((p) => p.remove());

  const keyword = form.elements.query.value;
  const config = {
    params: {
      q: keyword,
    },
  };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  //   console.log(res.data);
  getImages(res.data);
  getName(res.data);
  form.elements.query.value = "";
});

// function untuk mengambil nama dari object show
const getName = (shows) => {
  for (let result of shows) {
    if (result.show.name) {
      const paragraf = document.createElement("p");
      paragraf.innerText = result.show.name;
      document.body.append(paragraf);
    }
  }
};

// function untuk mengambil poster berukuran medium dari object show
const getImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
