// Ex 11: Use reduce()  function to return the longest string in an array of strings. ["Java", "JavaScript", "Python", "C++", "PHP"]

let arr = ["Java", "JavaScript", "Python", "C++", "PHP"];

let longest = arr.reduce((a, c) => {
  console.log(a);
  console.log(a.length);
  console.log(c);
  console.log(c.length);
  return a.length < c.length ? c : a;
});

console.log(`The longest string is "${longest}"`);
