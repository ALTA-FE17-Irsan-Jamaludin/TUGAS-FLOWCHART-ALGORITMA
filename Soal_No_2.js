function cekKondisiLampu(angka) {
  let faktor = 1;
  for (let i = 1; i < angka; i++) {
    if (angka % i === 0) {
      faktor++;
    }
  }
  faktor % 2 === 0 ? console.log("Lampu Mati") : console.log("Lampu Menyala");
}

cekKondisiLampu(5);
