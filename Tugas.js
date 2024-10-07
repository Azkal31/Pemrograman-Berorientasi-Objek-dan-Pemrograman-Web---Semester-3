class PembelianTiket {
  constructor(nama, tahunPeluncuran, kapasitasPenumpang, hargaTiket) {
    this.nama = nama;
    this.tahunPeluncuran = tahunPeluncuran;
    this.kapasitasPenumpang = kapasitasPenumpang;
    this.hargaTiket = hargaTiket;
  }

  beliTiket(jumlahTiket) {
    const totalHarga = this.hargaTiket * jumlahTiket;
    return `Pembelian ${jumlahTiket} tiket berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Kapasitas: ${this.kapasitasPenumpang}, Harga per tiket: Rp${this.hargaTiket}`;
  }
}

class PembelianRuangan extends PembelianTiket {
  constructor(nama, tahunPeluncuran, kapasitasPenumpang, hargaRuangan) {
    super(nama, tahunPeluncuran, kapasitasPenumpang);
    this.hargaRuangan = hargaRuangan;
  }

  beliRuangan(jumlahRuangan) {
    const totalHarga = this.hargaRuangan * jumlahRuangan;
    return `Pembelian ${jumlahRuangan} ruangan berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Kapasitas: ${this.kapasitasPenumpang}, Harga per ruangan: Rp${this.hargaRuangan}`;
  }
}

// Subclass 1: PembelianBisnis
class PembelianBisnis extends PembelianTiket {
  constructor(nama, tahunPeluncuran, kapasitasPenumpang, hargaBisnis) {
    super(nama, tahunPeluncuran, kapasitasPenumpang, hargaBisnis);
  }

  beliTiket(jumlahTiket) {
    const totalHarga = this.hargaTiket * jumlahTiket;
    return `Pembelian ${jumlahTiket} tiket Bisnis berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Kapasitas: ${this.kapasitasPenumpang}, Harga per tiket Bisnis: Rp${this.hargaTiket}`;
  }
}

// Subclass 2: PembelianEkonomi
class PembelianEkonomi extends PembelianTiket {
  constructor(nama, tahunPeluncuran, kapasitasPenumpang, hargaEkonomi) {
    super(nama, tahunPeluncuran, kapasitasPenumpang, hargaEkonomi);
  }

  beliTiket(jumlahTiket) {
    const totalHarga = this.hargaTiket * jumlahTiket;
    return `Pembelian ${jumlahTiket} tiket Ekonomi berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Kapasitas: ${this.kapasitasPenumpang}, Harga per tiket ekonomi: Rp${this.hargaTiket}`;
  }
}

// Subclass 3: PembelianKargo
class PembelianKargo extends PembelianTiket {
  constructor(nama, tahunPeluncuran, kapasitasKargo, hargaKargo) {
    super(nama, tahunPeluncuran, kapasitasKargo);
    this.hargaKargo = hargaKargo;
  }

  beliKargo(jumlahKargo) {
    const totalHarga = this.hargaKargo * jumlahKargo;
    return `Pembelian ${jumlahKargo} kargo berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Kapasitas kargo: ${this.kapasitasPenumpang}, Harga per kargo: Rp${this.hargaKargo}`;
  }
}

// Subclass 4: PembelianMakanan
class PembelianMakanan extends PembelianTiket {
  constructor(nama, tahunPeluncuran, hargaMakanan) {
    super(nama, tahunPeluncuran);
    this.hargaMakanan = hargaMakanan;
  }

  beliMakanan(jumlahMakanan) {
    const totalHarga = this.hargaMakanan * jumlahMakanan;
    return `Pembelian ${jumlahMakanan} makanan berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Harga per makanan: Rp${this.hargaMakanan}`;
  }
}

// Subclass 5: PembelianMinuman
class PembelianMinuman extends PembelianTiket {
  constructor(nama, tahunPeluncuran, hargaMinuman) {
    super(nama, tahunPeluncuran);
    this.hargaMinuman = hargaMinuman;
  }

  beliMinuman(jumlahMinuman) {
    const totalHarga = this.hargaMinuman * jumlahMinuman;
    return `Pembelian ${jumlahMinuman} minuman berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Harga per minuman: Rp${this.hargaMinuman}`;
  }
}

// Testing
const PembelianBisnis = new PembelianBisnis("Kapal Laut Budiono Siregar", 2010, 500, 500000);
console.log(pembelianBisnis.beliTiket(2));  // Membeli 2 tiket Bisnis

const pembelianEkonomi = new PembelianEkonomi("Kapal Laut Budiono Siregar", 2010, 500, 100000);
console.log(pembelianEkonomi.beliTiket(4));  // Membeli 4 tiket Ekonomi

const pembelianKargo = new PembelianKargo("Kapal Laut Budiono Siregar", 2010, 1000, 2000000);
console.log(pembelianKargo.beliKargo(3));  // Membeli 3 Kargo

const pembelianMakanan = new PembelianMakanan("Kapal Laut Budiono Siregar", 2010, 50000);
console.log(pembelianMakanan.beliMakanan(5));  // Membeli 5 Makanan

const pembelianMinuman = new PembelianMinuman("Kapal Laut Budiono Siregar", 2010, 30000);
console.log(pembelianMinuman.beliMinuman(3));  // Membeli 3 Minuman
