// Ex4: Develop a JS Code to check if a number is even or odd using recursion

function recursion(x) {
  if (x == 0) {
    console.log("even");
  } else if (x == -1) {
    console.log("odd");
  } else {
    recursion(x - 2);
  }
}
recursion(7);
