jQuery.fn.extend({
    lunbo: function(option) {
    	var q = $(this).eq(0);
    	var o = 0;
    	var $ul_li =$(this).find("ul").eq(0).find("li"); 
    	var $ol_li =$(this).find("ol").eq(0).find("li"); 
    	var leng = $ul_li.length;
    	var interval = (option.interval > 0 ? option.interval: -option.interval) || 3000;
    	
    	$ol_li.click(function() {
            $ol_li.eq(o).removeClass("selected");
            $ul_li.eq(o).fadeOut(1000);
            o = $ol_li.index($(this));
            $(this).addClass("selected");
            $ul_li.eq(o).fadeIn(1000);
        }),
        $ul_li.mouseenter(function() {
            clearTimeout(q);
        }).mouseleave(function() {
            v();
        }),
        v();
        
        function v() {
            q = setTimeout(function() {
            	$ol_li.eq(o).removeClass("selected");
            	$ul_li.eq(o).fadeOut(200);
                o++;
                o == leng && (o = 0);
                $ol_li.eq(o).addClass("selected");
                $ul_li.eq(o).fadeIn(1000);
                v();
            },interval)
        }
	}
});