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
  login: function () {
    console.log(this.ism);
  },
};
aboutMe.login();
console.log(aboutMe);
console.log(aboutMe.manzil);
console.log(aboutMe.manzil.uy);
console.log(aboutMe.sport);
console.log(aboutMe.sport[1]);

/////////////////////////////

// const boyi = Number(prompt("bo'yi"));
// const vazin = Number(prompt("vazin"));

// const BMI = vazin / (boyi / 100) ** 2;

// if (BMI <= 18.5) {
//   console.log("Siz ozg'in ekansiz! Vazn olishga harakat qiling !");
// } else if (BMI > 18.6 && BMI <= 29.9) {
//   console.log("Siz normal holatdasiz !");
// } else {
//   console.log("Siz semizsiz! Kamroq ovqatlaning yoki ko'proq sport bilan shug'ullaning !");
// }

///////////////////////////////////////

// const john = {
//   name: "John",
//   age: 20,
// };
// console.log(typeof john);

//////////////////////////////////////////////////////////////////////////

// const john = { name: "John", age: 20 };

// const numbers = [1, 3, 4, 5];

///////////////////////////////////////////

// const result = Array.isArray(numbers);
// const Employe = {
//   firstname: "John",
//   lastname: "Doe",
// };

// console.log(result);
// console.log(Employe.firstname);

// delete Employe.firstname;
// console.log(Employe.firstname);

///////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3];

// alert(arr);
// alert(String(arr) === "1,2,3");

///////////////////////////////////////////////////////////////////////////////////////

// const Employe = {
//   firstname: "John",
//   lastname: "Doe",
// };

// Employe.firstname = "Saidakbar";
// console.log(Employe.firstname);

/////////////////////////////////////////////

// const person = {
//   name: "John",
//   age: 30,
//   greet: function () {
//     console.log("The name is" + " " + this.name);
//   },
// };

// person.greet();

//////////////////////////////////////////////////

const newNames = [];
const person = {
  name: 'John',
  age: 30,
  greet: function() {
      let surname = 'Doe';
      console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();

///////////////////////////
