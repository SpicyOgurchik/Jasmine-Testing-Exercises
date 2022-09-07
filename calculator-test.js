
it('should calculate the monthly rate correctly', function () {
  const a = {amount: 6000, years: 3, rate: 5};
  expect(calculateMonthlyPayment(a)).toEqual("179.83");
});


it("should return a result with 2 decimal places", function() {
  const a = {amount: 43223, years: 3, rate: 5};
  expect(calculateMonthlyPayment(a)).toEqual("1295.43");
});

