$(function(){
	//页面加载完成之后执行
	pageInit();
});
function pageInit(){
	var screenWidth = window.screen.width,
	colModel = [
		{name : 'id',index : 'id',width : 55}, 
		{name : 'invdate',index : 'invdate',width : 90}, 
		{name : 'name',index : 'name',width : 100}, 
		{name : 'amount',index : 'amount',width : 80,align : "right"}, 
		{name : 'tax',index : 'tax',width : 80,align : "right"}, 
		{name : 'total',index : 'total',width : 80,align : "right"}, 
		{name : 'note',index : 'note',width : 150} , {
		name : 'act',		//列显示的名称
		index : 'act',		//传到服务器端用来排序用的列名称
		width : 200,		//宽度
		align : "center",	//对齐方式
		/*sortable : false, //是否可以排序
		editable : false, 	//是否可以编辑
		frozen : true		//列固定不随滚动条滚动，要有横向滚动条才有效，并且要执行下面的冻结列的方法
		searchoptions:{sopt:['eq','ne','le','lt','gt','ge']}//给列添加搜索的，可以自定义搜索的种类，必须要加上下面的筛选的方法*/
		}
	];
	if(screenWidth < 768){
		colModel[2].hidden = true;
		colModel[6].hidden = true;
		$("#showAllCol").show();
	}


	//创建jqGrid组件
	jQuery("#list2").jqGrid(
			{
				url : 'data/JSONData.json',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				postData : parseFormToObj("#testForm"),
				jsonReader :{
					root : 'rows',
					page : 'page',
					records : 'records',
					total : 'total'
				},
				colNames : [ 'Inv No', 'Date', 'Client', 'Amount', 'Tax','Total', 'Notes', '设置' ],//jqGrid的列显示名字
				colModel :colModel,
				rowNum : 10,			//一页显示多少条
				rowList : [5,10, 20, 30,50,100,200],//可供用户选择一页显示多少条
				pager : '#pager2',		//表格页脚的占位符(一般是div)的id
				/*sortname : 'id',		//初始化的时候排序的字段
				sortorder : "desc",		//排序方式,可选desc,asc*/                              
				mtype : "get",			//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,		//定义是否要显示总记录数
				rownumbers: true,		//number号
				multiselect : true,		//多选
				shrinkToFit: true,	//横向滚动条
				autowidth : true,		//创建表格时宽度自适应
				height : 'auto',//行的高度
				toolbarfilter : false,
				gridComplete : function() {
					var data = $("#list2").jqGrid('getRowData');
					$.each(data,function(index,item) {
						se = "<a class='btn btn-xs btn-link' onclick=\"$('#list2').expandSubGridRow('" + item.id + "')\">编辑</a>";
						ca = "<a class='btn btn-xs btn-link' onclick=\"$('#list2').saveRow('" + item.id + "',{url:'SONData.json',errorfunc:errorfunc})\">保存</a>";
						$("#list2").jqGrid('setRowData', item.id, {
							act : se + "|" + ca
						});
					})
					$("#list2").jqGrid('setGridWidth', ($("#content").width() - 2));
				},
				loadError:function(){
					$("#list2").jqGrid('setGridWidth', ($("#content").width() - 2));
				}
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	$("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false,search:false});

	//窗口大小发生改变刷新表格宽度
	$(window).on('resize.jqGrid', function() {
		$("#list2").jqGrid('setGridWidth', ($("#content").width() - 2));
	})

	//搜索的方法
	$("#searchButton").off("click").on("click",function(){
		$("#list2").jqGrid("setGridParam",{postData:parseFormToObj("#testForm"),page:1}).trigger("reloadGrid"); 
		$(this).hasClass()
	});
	
	//重置
	$("#testForm input[type=reset]").off("click").on("click",function(){
		$('#testForm')[0].reset();
		$("#list2").jqGrid("setGridParam",{postData:parseFormToObj("#testForm"),page:1}).trigger("reloadGrid"); 
	});

	$("#showAllCol").click(function(){
		$("#list2").jqGrid("setGridParam",{shrinkToFit:false}).jqGrid("showCol",['name','note']).trigger("reloadGrid"); 
	});


	//将表单的序列化然后和转成对象
	function parseFormToObj(form) {
		var array = $(form).serializeArray();
		var param = "{";
		for (var i = 0; i < array.length; i++) {
			var name = array[i].name;
			var value = $.trim(array[i].value);
			var placeholder = $.trim($("[name='" + name + "']").attr("placeholder"));
			if (value === null || value === "" || value === placeholder) {
				param = param + "\"" + name + "\":'',";
			} else {
				param = param + "\"" + name + "\":'" + value + "',";
			}
		}
		if (param.indexOf(",") != -1) {
			param = param.substring(0, param.length - 1);
		}
		param = param + "}";
		return (new Function("","return "+param))();
	}
}