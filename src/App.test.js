const n = 4;

it("should return 4", () => {
  expect(n).toEqual(4);
});

it(" should return true", () => {
  expect(true).toBe(true);
});

it("show screen", () => {
  expect(window.innerWidth > 1023).toBe(true)
})
