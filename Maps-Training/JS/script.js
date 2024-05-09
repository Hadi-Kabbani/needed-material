// console.log("Welcome Hadi", "you are hero");
// let firstName = "Hadi";
// let age = 22;
// let Grad = true;
// let array = [];

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(Grad);

// let fadi = "fadi",
//   mFadi = 10,
//   cFadi = 10,
//   kFadi = 10,
//   aFadi = (mFadi + cFadi + kFadi) / 3;
// let hadi = "Hadi",
//   mHadi = 14,
//   cHadi = 16,
//   kHadi = 12,
//   aHadi = (mHadi + cHadi + kHadi) / 3;
// console.log("Hadi averge = " + aHadi);
// console.log("Fadi averge = " + aFadi);
// console.log("is hadi has higher grade than fadi " + (aHadi > aFadi));

// let grade = prompt("Enter your grade: ");

// if (grade >= 90) {
//   console.log("The grade is A");
// } else if (grade >= 80) {
//   console.log("The grade is B");
// } else if (grade >= 70) {
//   console.log("The grade is C");
// } else if (grade >= 60) {
//   console.log("The grade is D");
// } else {
//   console.log("The grade is F");88
// }

// switch (true) {
//   case grade >= 90:
//     console.log("A");
//     break;
//   case grade >= 80:
//     console.log("B");
//     break;
//   case grade >= 70:
//     console.log("C");
//     break;
//   case grade >= 60:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
// }

// grade >= 90
//   ? console.log("The grade is A")
//   : grade >= 80
//   ? console.log("The grade is B")
//   : grade >= 70
//   ? console.log("The grade is C")
//   : grade >= 60
//   ? console.log("The grade is D")
//   : console.log("The grade is F");

// let x = 1000000235;
// while (x != 0) {
//   console.log(x % 10);
//   x /= 10;
// }

// console.log("leave loop");]

// for (let i = 1; i <= 3; i++) {
//   console.log(`question ${i}`);
//   for (let j = 0; j < 5; j++) {
//     console.log(`task ${j}`);
//   }
// }

// function information(name, age, major) {
//   console.log(
//     `Student name ${name}
// his/her age is ${age}
// his/her major ${major}`
//   );
// }

// information("hadi", 22, "computer sciense");
// information("fadi", 21, "computer sciense");

// let information = {
//   firstName: "Hadi",
//   lastName: "Kabbani",
//   major: "CSCI",
//   age: 22,
//   phoneNamber: 769167223,
//   greet: function greet() {
//     console.log(
//       `first Name is ${this.firstName}
// last Name is ${this.lastName}
// major is ${this.major}
// age is ${this.age}
// phone number is ${this.phoneNamber}
// `
//     );
//   },
// };

// information.greet();

// let h1 = document.getElementsByClassName("section");

// h1[0].innerHTML = "Welcome";
// h1[0].classList = "para";
// document.body.style = "color: white; background-color: black;";

// let div = document.createElement("div");
// div.style = "background-color: white; height: 200px;";
// let a = document.createElement("a");
// a.href = "https://www.google.com";
// a.textContent = "google";
// div.appendChild(a);
// document.body.appendChild(div);
// document.body.style = "background-color: black;";

// let h2 = document.createElement("h2");
// h2.innerText = "h2";
// let h4 = document.createElement("h4");
// h4.innerText = "h4";
// let h6 = document.createElement("h6");
// h6.innerText = "h6";

// let h1 = document.getElementsByTagName("h1")[0];
// let h3 = document.getElementsByTagName("h3")[0];
// let h5 = document.getElementsByTagName("h5")[0];

// document.body.appendChild(h2);
// document.body.appendChild(h4);
// document.body.appendChild(h6);

// h1.after(h2);
// h3.after(h4);
// h5.after(h6);

// let div = document.querySelector(".section");
// let bottom = document.querySelector("button");

// bottom.onclick = function () {
//   div.style.setProperty("background-color", "red");
// };

// let array = ["hadi", "fadi", "shadi", "ahmad"];

// let names = array.map((e) => e.toUpperCase());

// console.log(names);

// let array1 = ["hadi", "kabbani", 22, "CS"];

// let [firstName, , , major] = array1;

// console.log(firstName, major);
