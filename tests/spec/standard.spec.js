describe("$tandard tests", function() {
	var elementArray,
		results,
		arrayLength
	beforeEach(function () {
	elementArray = [document.createElement("div"),document.createElement("span")];
	arrayLength = elementArray.length;
	});

	it("$tandard should be a function in global scope",function () {
		expect(typeof $tandard == "function").toBe(true);
	})


 })