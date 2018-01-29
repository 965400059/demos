define(function(require,exports,module){
	exports.init = function(){
		require(['util','api/user'],function (util) {
			$("#loginBtn").click(function(){
				if($("#loginFrom").data('bootstrapValidator').validate().isValid()){
					var data = {
							param : $("[name=param]").val(),
							pwd : $("[name=pwd]").val()
					}
					$.post($.paths.admin+"/user/login.do",data,function(data){
						if(data.flag){
							window.sessionStorage.setItem("admin",JSON.stringify(data.data));
							window.location.href = $.paths.admin+'/user/homepage.do';
						}else{
							$(".error").text("账号或者密码不正确");
							$("[name=pwd]").val("");
						}
					},"json"); 
				}
			})
			
			$(document).keyup(function(event){
				 if(event.keyCode ==13){
				  	$("#loginBtn").trigger("click");
				 }
			});
			
			$('#loginFrom').bootstrapValidator({
		 	 	message: 'This value is not valid',
		 	 	feedbackIcons: {
		            valid: 'glyphicon glyphicon-ok',
		            invalid: 'glyphicon glyphicon-remove',
		            validating: 'glyphicon glyphicon-refresh'
		        },
		        fields: {
		        	param: {
		                validators: {
		                    notEmpty: {
		                        message: '用户名不能为空！'
		                    },stringLength: {
		                        min: 6,
		                        max: 30,
		                        message: '用户名长度为6~30位。'
	                       	}
		                }
		            },
		            pwd: {
		                validators: {
		                    notEmpty: {
		                        message: '密码不能为空！'
		                    },stringLength: {
		                        min: 6,
		                        max: 30,
		                        message: '密码长度为6~30位。'
	                       	}
		                }
	                }
		        }
		    });
		})
	}
});