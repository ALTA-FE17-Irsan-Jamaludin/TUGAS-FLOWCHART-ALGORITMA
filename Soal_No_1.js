function cekFaktorBilangan(n) {
  let faktor = 1;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      faktor++;
    }
  }
  faktor > 4 ? console.log("Bukan Bilangan Keren") : console.log("Bilangan Keren");
}

cekFaktorBilangan(51);
