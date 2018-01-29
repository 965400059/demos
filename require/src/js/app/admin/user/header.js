define(function(require,exports,module){
	exports.init = function(){
		require(['util','tmpl'],function (util) {
			$("#realName").text(ADMIN_USER.realName==null?"":ADMIN_USER.realName);
			
			$('#menuContent').tmpl(ADMIN_USER.remark).appendTo('#menuList');
				
			var locaName =  window.location.href;
			$(".navbar-nav li").each(function(idx,item){
				var name = $(this).find("a").attr("href");
				if(name == "javascript:;"){
					var flog = false;
					var _this = $(item);
					_this.find("li").each(function(i,it){
						var name = $(it).find("a").attr("href");
						if(locaName.indexOf(name) > 0){
							flog = true;
							_this.find("a").click();
							$(this).addClass("active");
							return false;
						}
					})
					if(flog){
						return false;
					}
				}
				if(locaName.indexOf(name) > 0){
					$(this).addClass("active");
					return false;
				}
			})
				
			$("#updatePwd").click(function(){
	       		layer.open({
	       			  	type: 2,
	       				title: '修改密码',
	       			  	shadeClose: true,
	       			  	shade: 0.8,
	       			  	area: ['380px', '400px'],
	       			  	content:  $.paths.admin+'/user/updatePage.do' //iframe的url
	       			});
	       	});
			
	       	$("#logout").click(function(){
	       		//询问框
	       		layer.confirm('是否退出登录！',{
	       		  btn: ['退出','取消'] //按钮
	       		}, function(){
	       			sessionStorage.removeItem("admin");
	       			window.location.href = $.paths.admin+"/user/loginV.do";
	       		});
	       	});
		})
	}
});