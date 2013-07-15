describe("$tandard tests", function() {
	var elementArray,
		results,
		arrayLength,
		$standardCollection;

	function filterPropertyNames(object) {
		return Object.getOwnPropertyNames(object)
	}
	beforeEach(function () {
	elementArray = [document.createElement("div"),document.createElement("span")];
	arrayLength = elementArray.length;
	$standardCollection = $standard(elementArray);
	});

	it("$standard should be a function in global scope",function () {
		expect(typeof $standard == "function").toBe(true);
	})
	it("$standardCollection should implement methods that match all members of Node", function () {
		var properties = filterPropertyNames(Node.prototype),
			missing = [];
		for (var i =0;i<properties.length;i++) {
			if (!(properties[i] in $standardCollection) && !(properties[i] in Node)) {
				missing.push(properties[i]);
			}
		}
		expect(missing.length).toBe(0,"The following members where missing:"+missing.join(', '));
	})
	it("$standardCollection should implement methods that match all (standard) members of Element", function () {
		var properties = filterPropertyNames(Element.prototype),
			missing = [];
		for (var i =0;i<properties.length;i++) {
			if (!(properties[i] in $standardCollection) && !(properties[i] in Element)) {
				missing.push(properties[i]);
			}
		}
		expect(missing.length).toBe(0,"The following members where missing:"+missing.join(', '));
	})
	it("$standardCollection should implement methods that match all (standard) members of HTMLElement", function () {
		var properties = filterPropertyNames(HTMLElement.prototype),
			missing = [];
		for (var i =0;i<properties.length;i++) {
			if (!(properties[i] in $standardCollection) && !(properties[i] in HTMLElement)) {
				missing.push(properties[i]);
			}
		}
		expect(missing.length).toBe(0,"The following members where missing:"+missing.join(', '));
	})



 })