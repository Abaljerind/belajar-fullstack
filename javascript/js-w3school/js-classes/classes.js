// create class
class Mobil {
  constructor(namaMobil, tahunKeluar) {
    this.namaMobil = namaMobil;
    this.tahunKeluar = tahunKeluar;
  }
}

// menggunakan class mobil untuk membuat object baru
const mobilInnova = new Mobil("Innova", 2012);
const mobilKijang = new Mobil("Kijang", 2004);

// ulang create class
class Gadget {
  constructor(namaGadget, harga, fungsi) {
    this.namaGadget = namaGadget;
    this.harga = harga;
    this.fungsi = fungsi;
  }
}

// menggunakan class Gadget
const smartphone = new Gadget(
  "Shiaomi 123",
  "Rp. 12.000.000",
  "Untuk bermain game dan bertukar pesan"
);
const pc = new Gadget(
  "PC Gaming",
  "Rp. 8.000.000",
  "Untuk bermain game dan juga melakukan pekerjaan yang tidak bisa diatasi oleh smartphone"
);
const laptop = new Gadget(
  "Laptop Gaming",
  "Rp. 12.500.000",
  "Untuk mempermudah melakukan pekerjaan dari manapun"
);
