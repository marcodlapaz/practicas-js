function stringMasLarga(strings) {
  let masLarga = strings[0];

  for (let i = 0; i < strings.length; i++) {
    if (masLarga.length < strings[i].length) {
      masLarga = strings[i];
    }
  }

  return masLarga;
}

console.log(stringMasLarga(["hi", "hello", "ni hao", "guten tag"]));
