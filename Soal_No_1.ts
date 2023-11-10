function cekFaktorBilangan(n: number): void {
  let faktor: number = 1;
  for (let i: number = 1; i < n; i++) {
    if (n % i === 0) {
      faktor++;
    }
  }
  if (faktor <= 4) {
    console.log("Bilangan Keren");
  }
}

cekFaktorBilangan(51);
