define(function(require,exports,module){
	var util = require('util');
	exports.init = function(){
		$("p").html(util.trim(" 我是【新增】页   "));
	}
})