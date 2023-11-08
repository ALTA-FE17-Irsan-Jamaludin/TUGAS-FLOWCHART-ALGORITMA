function cekFaktorBilangan(angka) {
  let faktor = 1;
  for (let i = 1; i < angka; i++) {
    if (angka % i === 0) {
      faktor++;
    }
  }
  faktor > 4 ? console.log("Bukan Bilangan Keren") : console.log("Bilangan Keren");
}

cekFaktorBilangan(52);
