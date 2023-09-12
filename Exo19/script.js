let tab = [
  //   personne: ["Jean", "Dupont"],
  //   age: "15",
  //   personne: ["Pierre", "Durant"],
  //   age: "16",
  //   personne: ["Jean", "Martin"],
  //   age: "17",
  {
    personne: ["Jean", "Dupont"],
    age: "15",
  },
  {
    personne: ["Pierre", "Durant"],
    age: "16",
  },
  {
    personne: ["Jean", "Martin"],
    age: "17",
  },
];
tab.forEach((element) => {
  document.querySelector(
    "tbody"
  ).innerHTML += `<tr><td>${element.personne[0]}</td><td>${element.personne[1]}</td><td>${element.age}</td></tr>`;
});
