//文档加载完成执行
$(function(){
	changeScaleByWidth();
	window.onresize = function(){
	    changeScaleByWidth();           
	}
})

//根据浏览器窗口宽度调整html缩放
function changeScaleByWidth() {
	//浏览器窗口宽度
	var width = window.innerWidth;
	var height = window.innerHeight;
	//浏览器窗口高度
	//var height = window.innerHeight;
	var zoom = (width / 1920).toFixed(4);
	var zoom1 = (height / 1080).toFixed(4);
	$("body").css("-webkit-transform", "scale(" + zoom + ","+zoom1+")");
	$("body").css("-webkit-transform-origin", "0 0");
	$("body").css("-ms-transform", "scale(" + zoom +  ","+zoom1+")");
	
	$("body").css("-ms-transform-origin", "0 0");
	$("body").css("-moz-transform", "scale(" + zoom + ","+zoom1+")");
	
	$("body").css("-moz-transform-origin", "0 0");
	$("html").css("height", zoom1 * 1080 + "px");
	$("html").css("width", zoom * 1920 + "px");
}