// Superclass
class Kapal {
    constructor(nama, tahunPembuatan) {
      this.nama = nama;
      this.tahunPembuatan = tahunPembuatan;
    }
  
    // Metode di Superclass
    informasiKapal() {
      return `Kapal ini bernama ${this.nama} dan dibuat pada tahun ${this.tahunPembuatan}`;
    }
  }
  
  // Subclass
  class KapalPenumpang extends Kapal {
    constructor(nama, tahunPembuatan, kapasitasPenumpang) {
      // Memanggil constructor dari superclass
      super(nama, tahunPembuatan);
      this.kapasitasPenumpang = kapasitasPenumpang;
    }
  
    // Metode di Subclass
    informasiPenumpang() {
      return `${super.informasiKapal()} dengan kapasitas penumpang ${this.kapasitasPenumpang}`;
    }
  }
  
  // Membuat objek dari subclass
  const kapal1 = new KapalPenumpang("Kapal Laut Budiono Siregar", 2010, 500);
  
  // Memanggil metode
  console.log(kapal1.informasiPenumpang());
  