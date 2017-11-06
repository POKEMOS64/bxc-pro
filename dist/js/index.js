$(document).ready(function(){
$('nav .middle li a').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('active');
        }
    });
});
$(function(){
	$('.click').click(function(){
		$("nav ul.middle").addClass("nova");
		$(".click").addClass("none");
		$(".click_close").addClass("nova");
	});
	$('.click_close').click(function(){
		$("nav ul.middle").removeClass("nova");
		$(".click").removeClass("none");
		$(".click_close").removeClass("nova");
	});
});