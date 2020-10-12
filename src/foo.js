const { Bar } = require("./bar");

const Errors = {
  INVALID_NumberOfPeople:
    "numberOfPeople argument must be a number greater than 0",
};

module.exports = function Foo(numberOfPeople) {
  return new Promise((resolve, reject) => {
    if (
      !numberOfPeople ||
      typeof numberOfPeople !== "number" ||
      numberOfPeople <= 0
    ) {
      reject(new Error(Errors.INVALID_NumberOfPeople));
    }
    let people = [];
    // Simulate a delay using a timeout
    setTimeout(() => {
      for (let i = 0; i < numberOfPeople; i++) {
        people.push(Bar("Person_" + i, Math.ceil(Math.random() * 100)));
      }
      resolve(people);
    }, 1500);
  });
};
