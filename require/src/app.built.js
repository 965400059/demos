({
	appDir : './',  //js所在的文件
	baseUrl : './js/app',//要打包的路径
	dir : '../dist',//打包后存放的路径
	optimize : 'uglify',//打包的方式
	fileExclusionRegExp:/^(r|build)\.js|.*\.scss$/,//不打包的文件
    optimizeCss: 'standard',
    removeCombined: true,//打包之前是不是要删掉打包存放的文件里面的内容
	inlineText: true,//文本文件是否也可以合并压缩
	mainConfigFile : './js/lib/require/require.config.js',//require的配置文件的路径
	//要打包的文件的路口
	modules :　[
		{name : 'admin/user' , exclude : ['util']},
	]
})
