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
			throw new Error("Not implemented");
		},
		replaceChild: function $standard_standard_replaceChild() {
			throw new Error("Not implemented");
		},
		removeChild: function $standard_standard_removeChild() {
			throw new Error("Not implemented");
		},
		appendChild: function $standard_standard_appendChild() {
			throw new Error("Not implemented");
		},
		hasChildNodes: function $standard_standard_hasChildNodes() {
			throw new Error("Not implemented");
		},
		cloneNode: function $standard_standard_cloneNode() {
			throw new Error("Not implemented");
		},
		normalize: function $standard_standard_normalize() {
			throw new Error("Not implemented");
		},
		isSupported: function $standard_standard_isSupported() {
			throw new Error("Not implemented");
		},
		lookupPrefix: function $standard_standard_lookupPrefix() {
			throw new Error("Not implemented");
		},
		isDefaultNamespace: function $standard_standard_isDefaultNamespace() {
			throw new Error("Not implemented");
		},
		lookupNamespaceURI: function $standard_standard_lookupNamespaceURI() {
			throw new Error("Not implemented");
		},
		addEventListener: function $standard_standard_addEventListener() {
			throw new Error("Not implemented");
		},
		removeEventListener: function $standard_standard_removeEventListener() {
			throw new Error("Not implemented");
		},
		isSameNode: function $standard_standard_isSameNode() {
			throw new Error("Not implemented");
		},
		isEqualNode: function $standard_standard_isEqualNode() {
			throw new Error("Not implemented");
		},
		compareDocumentPosition: function $standard_standard_compareDocumentPosition() {
			throw new Error("Not implemented");
		},
		contains: function $standard_standard_contains() {
			throw new Error("Not implemented");
		},
		dispatchEvent: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		hasAttributes: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		nodeType: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		nodeName: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		baseURI: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		ownerDocument: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		parentNode: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		parentElement: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		childNodes: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		firstChild: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		lastChild: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		previousSibling: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		nextSibling: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		nodeValue: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		textContent: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		namespaceURI: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		prefix: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}, 
		localName: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getAttribute: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getAttributeNS: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		setAttribute: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		setAttributeNS: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		removeAttribute: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		removeAttributeNS: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		hasAttribute: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		hasAttributeNS: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getElementsByTagName: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getElementsByTagNameNS: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getElementsByClassName: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		mozMatchesSelector: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		setCapture: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		releaseCapture: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		mozRequestFullScreen: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		mozRequestPointerLock: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getAttributeNode: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		setAttributeNode: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		removeAttributeNode: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getAttributeNodeNS: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		setAttributeNodeNS: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getClientRects: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		getBoundingClientRect: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollIntoView: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		insertAdjacentHTML: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		querySelector: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		querySelectorAll: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		tagName: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		id: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		classList: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		attributes: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		children: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		firstElementChild: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		lastElementChild: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		previousElementSibling: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		nextElementSibling: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		childElementCount: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		onmouseenter: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		onmouseleave: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		onwheel: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollTop: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollLeft: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollWidth: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollHeight: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		clientTop: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		clientLeft: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},

		clientWidth: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		clientHeight: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollTopMax: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollLeftMax: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		innerHTML: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		outerHTML: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		insertAdjacentText: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		click: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		insertAdjacentElement: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		focus: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		blur: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollIntoViewIfNeeded: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollByLines: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		scrollByPages: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		webkitMatchesSelector: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		webkitCreateShadowRoot: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		remove: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		webkitRequestPointerLock: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		webkitRequestFullScreen: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		webkitRequestFullscreen: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},
		title: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},lang: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},dir: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},dataset: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},itemScope: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},itemType: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},itemId: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},itemRef: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},itemProp: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},properties: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},itemValue: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},hidden: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},tabIndex: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},accessKey: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},accessKeyLabel: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},draggable: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},contentEditable: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},isContentEditable: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},contextMenu: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},spellcheck: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},style: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},className: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},oncopy: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},oncut: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onpaste: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},offsetParent: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},offsetTop: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},offsetLeft: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},offsetWidth: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},offsetHeight: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onabort: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},oncanplay: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},oncanplaythrough: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onchange: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onclick: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},oncontextmenu: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondblclick: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondrag: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondragend: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondragenter: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondragleave: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondragover: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondragstart: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondrop: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ondurationchange: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onemptied: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onended: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},oninput: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},oninvalid: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onkeydown: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onkeypress: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onkeyup: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onloadeddata: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onloadedmetadata: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onloadstart: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmousedown: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmousemove: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmouseout: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmouseover: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmouseup: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onpause: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onplay: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onplaying: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onprogress: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onratechange: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onreset: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onseeked: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onseeking: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onselect: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onshow: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onstalled: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onsubmit: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onsuspend: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},ontimeupdate: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onvolumechange: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onwaiting: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmozfullscreenchange: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmozfullscreenerror: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmozpointerlockchange: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onmozpointerlockerror: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onblur: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onerror: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onfocus: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onload: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		},onscroll: function $standard_standard_dispatchEvent() {
			throw new Error("Not implemented");
		}
	},
	{

	}
);