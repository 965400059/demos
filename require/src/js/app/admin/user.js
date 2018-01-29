define(function(require,exports,module){
	var login = require('admin/user/login');
	var header = require('admin/user/header');
	var updatePage = require('admin/user/updatePage');
	
	return {
		login:login,
		header:header,
		updatePage:updatePage
	}
})