const expect = require("chai").expect;
const Foo = require("../../src/foo");

describe("Foo function", function () {
  before(function () {
    // Put any test setup require before cases are
    // executed in here
  });

  it("should be a function", function () {
    expect(Foo).to.be.a("function");
  });

  it("should throw an error if first argument is not given or is not a number", function (done) {
    Foo()
      .then(() => {
        done(new Error("Test failed"));
      })
      .catch(() => {
        Foo("abcd")
          .then(() => {
            done(new Error("Test failed"));
          })
          .catch(() => {
            done();
          });
      });
  });

  it("should return an array of person objects that have a name and age field", async function () {
    // Change the timeout for this test case since
    // we know it will take time.
    this.timeout(3000);
    let result = await Foo(10);
    expect(result).to.be.an("array").and.to.have.length(10);
    result.forEach((p) => {
      expect(p).to.have.property("name").that.is.a("string");
      expect(p).to.have.property("age").that.is.a("number");
    });
  });

  after(function () {
    // Put test teardown code here eg. clear up test entries
    // from db, close connections etc.
  });
});
