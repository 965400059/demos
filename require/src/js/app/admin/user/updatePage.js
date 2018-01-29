define(function(require,exports,module){
	exports.init = function(){
		require(['util','api/user'],function (util) {
			$("input[name=mobile]").val(ADMIN_USER.mobile);
			
			$("#pwdFormBtn").click(function(){
			   	if($("#pwdForm").data('bootstrapValidator').isValid()){
					var oldPwd = $("input[name=oldPwd]").val();
					var pwd = $("input[name=pwd]").val();
					var data = {
							id:ADMIN_USER.id,
						oldPwd:oldPwd,
						password:pwd
					}
					
					$._post($.paths.admin+"/employee/modify.do",data,function(data){
		                 if(!data.success){
		                	 layer.confirm(data.errMsg, {
		                		 	btn: ['确定']
		                		},function(){
		                			location.reload();
		                		});
		                 }else{
	                	 	layer.confirm(data.errMsg + ",请重新登录", {
	                		 	btn: ['确定']
	                		}, function(){
	                			 var  frameindex= parent.layer.getFrameIndex(window.name);
			                	 parent.layer.close(frameindex);
			                	 sessionStorage.removeItem('admin');
		                		 parent.location.href = $.paths.admin+"/user/loginV.do";
	                		});
		                 }
        			});
			   	}
			});
			
			$('#pwdForm').bootstrapValidator({
		 	 	message: 'This value is not valid',
		 	 	feedbackIcons: {
		            valid: 'glyphicon glyphicon-ok',
		            invalid: 'glyphicon glyphicon-remove',
		            validating: 'glyphicon glyphicon-refresh'
		        },
		        fields: {
		        	oldPwd: {
		                validators: {
		                    notEmpty: {
		                        message: '原密码不能为空！'
		                    },stringLength: {
		                        min: 6,
		                        max: 30,
		                        message: '原密码长度为6~30位。'
	                       	}
		                }
	                },
		            pwd: {
		                validators: {
		                    notEmpty: {
		                        message: '新密码不能为空！'
		                    },stringLength: {
		                        min: 6,
		                        max: 30,
		                        message: '新密码长度为6~30位。'
	                       	}
		                }
	                },
	                qrPwd: {
		                validators: {
		                    notEmpty: {
		                        message: '新密码不能为空！'
		                    },
		                    identical: {
		                        field: 'pwd',
		                        message: '跟新密码不一致。'
		                    }
		                }
	                }
		        }
		    });
		})
	}
});