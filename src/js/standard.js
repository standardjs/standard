(function (scope, $standard,constructor,prototype,definitions) {
	scope.$tandard = $standard;
	var Standard = $standard.Standard = constructor;
	for (var i in prototype) {
		Standard[i] = prototype[i];
	} 
})(
	window,
	function $standard(elementsCollection) {
		return new $standard.Standard(elementsCollection);
	},
	function $standard_Standard(elementsCollection) {
		this.collection = elementsCollection;
	},
	{

	},
	{

	}
)