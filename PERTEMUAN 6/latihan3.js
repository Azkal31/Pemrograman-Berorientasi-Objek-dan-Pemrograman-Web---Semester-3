// Superclass
class Sensor {
    constructor(namaSensor, lokasi) {
      this.namaSensor = namaSensor;
      this.lokasi = lokasi;
    }
  
    // Metode di Superclass
    informasiSensor() {
      return `Sensor: ${this.namaSensor}, Lokasi: ${this.lokasi}`;
    }
  }
  
  // Subclass
  class SensorSalinitas extends Sensor {
    constructor(namaSensor, lokasi, levelSalinitas) {
      // Memanggil constructor dari superclass
      super(namaSensor, lokasi);
      this.levelSalinitas = levelSalinitas; // Tingkat salinitas dalam ppt (part per thousand)
    }
  
    // Metode untuk menampilkan informasi salinitas
    cekSalinitas() {
      let kategori;
      if (this.levelSalinitas < 5) {
        kategori = "Air Tawar";
      } else if (this.levelSalinitas >= 5 && this.levelSalinitas <= 30) {
        kategori = "Air Payau";
      } else {
        kategori = "Air Laut";
      }
      return `${super.informasiSensor()} mendeteksi salinitas ${this.levelSalinitas} ppt (${kategori})`;
    }
  }
  
  // Membuat objek dari subclass
  const sensor1 = new SensorSalinitas("Sensor Salinitas #1", "Pantai Barat", 35);
  const sensor2 = new SensorSalinitas("Sensor Salinitas #2", "Danau Air Tawar", 2);
  
  // Memanggil metode
  console.log(sensor1.cekSalinitas());
  console.log(sensor2.cekSalinitas());
  