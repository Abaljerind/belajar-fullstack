const contohPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve(() => {
    //   // jika kondisi nya berhasil
    //   "berhasil";
    // });
    reject(() => {
      // jika kondisi nya gagal
      "gagal";
    });
  });
  // resolve & reject bisa berisi function seperti diatas atau tidak berisi function.
};
