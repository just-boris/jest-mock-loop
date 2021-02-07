import foo from "../foo";
import bar from "../bar";

// this does not work
for (const moduleName of ["foo", "bar"]) {
  jest.mock(`../${moduleName}`, () => "mock");
}

// this works, but not ideal when you have 10+ such modules
// jest.mock(`../foo`, () => "mock");
// jest.mock(`../bar`, () => "mock");

test("should mock", () => {
  expect(foo).toEqual("mock");
  expect(bar).toEqual("mock");
});
