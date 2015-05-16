describe("About Expects", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should expect true", function() {
    expect(true).toBeTruthy(); // FIX: changed false to true
  });

  //To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () { 
	  var expectedValue = 2; // FIX:set expectedValue = to actualValue value (2)
	  var actualValue = 1 + 1;
	
	  expect(actualValue === expectedValue).toBeTruthy();
  });  

  //Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () { 
	  var expectedValue = 2; // FIX:set expectedValue = to actualValue value (2)
	  var actualValue = 1 + 1;
	
  // toEqual() compares using common sense equality.
	  expect(actualValue).toEqual(expectedValue);
  });

  //Sometimes you need to be really exact about what you "type".
  it("should assert equality with ===", function () { 
	  var expectedValue = '2'; // FIX: set expected value to 2 stringified
	  var actualValue = (1 + 1).toString();
	
  // toBe() will always use === to compare.
	  expect(actualValue).toBe(expectedValue);
  });  

  //Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
	  expect(1 + 1).toEqual(2); // FIX: filled in .toEqual() w/expected value
  });
});
