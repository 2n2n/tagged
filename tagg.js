var class_tag = (function($, window, document) {
	var modules = {
		setData: function(data) {
			alert(data);
		},
		getData: function() {
			console.log(settings.data);
		}
	};
	var settings = {
		url: null,
		data: [],
		container: null
	}

	function init(fn, data) {
		if(modules.hasOwnProperty(fn)) {
			modules[fn](data);
		}
		else {
			$.extend(settings, fn);
		}
	};

	

	return init;
	// return {
	// 	init: init,
	// 	setData: setData
	// };
})(jQuery, window, document);

jQuery.extend(jQuery.fn, {tagg:class_tag});