// Ex13: What is the output of the following JS code segments? and Why?

// a
var employee = {
  firstName: "Rawan",
  sayHi: function () {
    console.log("Hi Coach ! " + this.firstName);
  },
};

employee.sayHi(); // ?

// b
var employee = {
  firstName: "Rawan",
  info: {
    hasCar: true,
    hasPet: true
  },
  printInfo: function () {
    console.log("Car owner? " + this.hasCar);
  }
}

employee.printInfo(); // ?

// c
var employee = {
  firstName: "Rawan",
  info: {
    hasCar: true,
    hasPet: true,
    printAddress: function () {
      return this.data.address;
    },
    data: {
      address: "Zarqa",
    },
  },
};

employee.info.printAddress(); // ?
