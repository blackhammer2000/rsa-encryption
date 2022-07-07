let num1 = "janey";

// if (num1 || num2) {
//   console.table("both numbers are there");
// } else {
//   console.log("one of the numbers was not provided");
// }
const multiples19 = [];
const multiples24 = [];

for (let i = 19; i < 100; i++) {
  multiples19.push(i * 19);
}
for (let i = 1; i < 100; i++) {
  multiples24.push(i * 24);
}

// const formula =  19d (%ff) = 1

let result = 0;

console.log(multiples19, multiples24);
