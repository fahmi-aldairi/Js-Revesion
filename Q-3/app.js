// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers.

let arr;
let arrWithNums = [];
let arrOnlyStrings = [];

function check() {
  arr = ["f1", "d", "s4", "b", "f52Ahmi"];
  let pattern = /[1-9]/g;
  if (
    arr.forEach((element) => {
      if (element.match(pattern)) {
        arrWithNums.push(element);
      } else {
        arrOnlyStrings.push(element);
      }
    })
  ) {
  }
}
check();
console.log(arr);
console.log(arrWithNums);
console.log(arrOnlyStrings);

