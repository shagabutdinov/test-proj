const { someFunc } = require('./file')

describe("test 1", () => {
  it("test 2", async () => {
    expect(someFunc(1)).toEqual(1);
  });
});
