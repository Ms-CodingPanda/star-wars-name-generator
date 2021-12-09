function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function jediNameGenerator() {
  let jediPrefix = [
    "Master",
    "Padawan",
    "Guardian",
    "Counsular",
    "Sentinel",
    "Historian",
  ];
  let firstName = [
    "Carth",
    "Maz",
    "Ulie",
    "Motee",
    "Owen",
    "Oola",
    "Talon",
    "Meetra",
    "Jabba",
    "Bo-Katan",
    "Atris",
    "Kit",
    "Ayla",
    "Wedge",
    "Lyn",
    "Galen",
    "Lumiya",
    "Marka",
    "Exar",
    "Freedon",
    "Barriss",
    "Juhani",
    "Trask",
    "Omega",
    "Revan",
    "Poe",
    "Rex",
    "Mace",
  ];
  let surname = [
    "Secura",
    "Eclipse",
    "Kun",
    "Sunrider",
    "Ackbar",
    "Organa",
    "Lars",
    "Vao",
    "Ti",
    "Shan",
    "The Hutt",
    "Katarn",
    "Windu",
    "Marek",
    "Amidala",
    "Sadow",
    "Starkiller",
    "Bane",
    "Fett",
    "Rohm",
    "Solo",
    "Skywalker",
    "Qel-Droma",
    "Jinn",
    "Kenobi",
    "Palpatine",
    "Pall",
  ];

  let jediName =
    capFirst(jediPrefix[getRandomInt(0, jediPrefix.length + 1)]) +
    " " +
    capFirst(firstName[getRandomInt(0, firstName.length + 1)]) +
    " " +
    capFirst(surname[getRandomInt(0, surname.length + 1)]);
  document.querySelector(".jedi-name").innerHTML = `${jediName}`;
}

function sithNameGenerator() {
  let sithPrefix = [
    "Darth",
    "Dark Lord",
    "Inquisitor",
    "Apprentice",
    "Assassin",
    "Acolyte",
  ];
  let firstName = [
    "Carth",
    "Maz",
    "Ulie",
    "Motee",
    "Owen",
    "Oola",
    "Talon",
    "Meetra",
    "Jabba",
    "Bo-Katan",
    "Atris",
    "Kit",
    "Ayla",
    "Wedge",
    "Lyn",
    "Galen",
    "Lumiya",
    "Marka",
    "Exar",
    "Freedon",
    "Barriss",
    "Juhani",
    "Trask",
    "Omega",
    "Revan",
    "Poe",
    "Rex",
    "Mace",
  ];
  let surname = [
    "Secura",
    "Eclipse",
    "Kun",
    "Sunrider",
    "Ackbar",
    "Organa",
    "Lars",
    "Vao",
    "Ti",
    "Shan",
    "The Hutt",
    "Katarn",
    "Windu",
    "Marek",
    "Amidala",
    "Sadow",
    "Starkiller",
    "Bane",
    "Fett",
    "Rohm",
    "Solo",
    "Skywalker",
    "Qel-Droma",
    "Jinn",
    "Kenobi",
    "Palpatine",
    "Pall",
  ];

  let sithName =
    capFirst(sithPrefix[getRandomInt(0, sithPrefix.length + 1)]) +
    " " +
    capFirst(firstName[getRandomInt(0, firstName.length + 1)]) +
    " " +
    capFirst(surname[getRandomInt(0, surname.length + 1)]);
  document.querySelector(".sith-name").innerHTML = `${sithName}`;
}
