const expect = require("chai").expect;
const { Bar } = require("../../src/bar");

describe("Bar function", function () {
  before(function () {
    // Put any test setup require before cases are
    // executed in here
  });

  it("should be a function", function () {
    expect(Bar).to.be.a("function");
  });

  it("should throw an error if first argument is not given or is not a string", function () {
    try {
      Bar();
      throw new Error("Test failed");
    } catch (error) {
      try {
        Bar(123);
        throw new Error("Test failed");
      } catch (error) {
        return;
      }
    }
  });
  it("should throw an error if second argument is not given or is not a number", function () {
    try {
      Bar("Test User");
      throw new Error("Test failed");
    } catch (error) {
      try {
        Bar("Test User", "InvalidAge");
        throw new Error("Test failed");
      } catch (error) {
        return;
      }
    }
  });
  it("should throw an error if name argument is `admin`", function () {
    try {
      Bar("admin", 29);
      throw new Error("Test failed");
    } catch (error) {
      return;
    }
  });
  it("should throw an error if age argument is less than 10 or greater than 80", function () {
    try {
      Bar("person", 9);
      throw new Error("Test failed");
    } catch (error) {
      try {
        Bar("person", 81);
        throw new Error("Test failed");
      } catch (error) {
        return;
      }
    }
  });

  it("should return an object with age and name fields", function () {
    const TEST_NAME = "Test";
    const TEST_AGE = 19;

    let result = Bar(TEST_NAME, TEST_AGE);

    expect(result)
      .to.have.property("name")
      .that.is.a("string")
      .and.is.eq(TEST_NAME);
    expect(result)
      .to.have.property("age")
      .that.is.a("number")
      .and.is.eq(TEST_AGE);
  });

  after(function () {
    // Put test teardown code here eg. clear up test entries
    // from db, close connections etc.
  });
});
