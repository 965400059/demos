require.config({
	baseUrl : '/demos/require/src/js/app', 
	paths : {
		jquery : '../lib/jquery',
		jqGrid : '../lib/jqGrid/jqGrid',
		util : '../lib/util',
		css : '../lib/require/css.min',
		'css-builder' : '../lib/require/css-builder',
		normalize : '../lib/require/normalize',
		text : '../lib/require/text',
		user : './user'
	},
	shim : {
		'jqGrid' :　['../lib/jqGrid/js/jquery.jqGrid.src','../lib/jqGrid/js/grid.locale-cn',]
	}
});