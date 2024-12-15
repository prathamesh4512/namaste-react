import sum from "../components/sum";

test("test sum with two argument of type number", () => {
  let result = sum(1, 2);

  //Assertion
  expect(result).toBe(3);
});
