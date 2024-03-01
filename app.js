let aboutMe = {
  ism: "Saidakbar",
  familiya: "Ovilov",
  yosh: 22,
  manzil: {
    viloyat: "Namangan",
    tuman: "Norin",
    mfy: "Suzoqovul",
    kocha: "Bog'",
    uy: 17,
  },
  sport: {
    1: "volebol",
    2: "Futbol",
  },
  til: {
    1: "o'zbek",
    2: "ingliz",
    3: "rus",
  },
  login: function() {
    console.log(this.ism)
  }
};
aboutMe.login()
console.log(aboutMe);
console.log(aboutMe.manzil);
console.log(aboutMe.manzil.uy);
console.log(aboutMe.sport);
console.log(aboutMe.sport[1]);

/////////////////////////////



///////////////////////////
