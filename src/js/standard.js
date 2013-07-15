(function (scope, $standard,constructor,prototype,definitions) {
	scope.$standard = $standard;
	var Standard = $standard.Standard = constructor;
	for (var i in prototype) {
		Standard.prototype[i] = prototype[i];
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
		insertBefore: function insertBefore() {
			throw new Error("Not implemented")
		},
		replaceChild: function $standard_standard_replaceChild() {
			throw new Error("Not implemented")
		},
		removeChild: function $standard_standard_removeChild() {
			throw new Error("Not implemented")
		},
		appendChild: function $standard_standard_appendChild() {
			throw new Error("Not implemented")
		},
		hasChildNodes: function $standard_standard_hasChildNodes() {
			throw new Error("Not implemented")
		},
		cloneNode: function $standard_standard_cloneNode() {
			throw new Error("Not implemented")
		},
		normalize: function $standard_standard_normalize() {
			throw new Error("Not implemented")
		},
		isSupported: function $standard_standard_isSupported() {
			throw new Error("Not implemented")
		},
		lookupPrefix: function $standard_standard_lookupPrefix() {
			throw new Error("Not implemented")
		},
		isDefaultNamespace: function $standard_standard_isDefaultNamespace() {
			throw new Error("Not implemented")
		},
		lookupNamespaceURI: function $standard_standard_lookupNamespaceURI() {
			throw new Error("Not implemented")
		},
		addEventListener: function $standard_standard_addEventListener() {
			throw new Error("Not implemented")
		},
		removeEventListener: function $standard_standard_removeEventListener() {
			throw new Error("Not implemented")
		},
		isSameNode: function $standard_standard_isSameNode() {
			throw new Error("Not implemented")
		},
		isEqualNode: function $standard_standard_isEqualNode() {
			throw new Error("Not implemented")
		},
		compareDocumentPosition: function $standard_standard_compareDocumentPosition() {
			throw new Error("Not implemented")
		},
		contains: function $standard_standard_contains() {
			throw new Error("Not implemented")
		},
		dispatchEvent: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented")
		}
	},
	{

	}
)