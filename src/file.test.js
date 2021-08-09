const { someFunc, newOtherFunc } = require('./file')

describe("test 1", () => {
  it("test 2", async () => {
    expect(someFunc(1)).toEqual(1);
  });
});

describe(newOtherFunc, () => {
  it("test 1", async () => {
    expect(newOtherFunc(10)).toEqual(100);
  });

  it("test 2", async () => {
    expect(newOtherFunc(1)).toEqual(1000);
  });
});
