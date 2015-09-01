$(document).ready(function(e) {
    $(".triger-menu").click(function(){
		$(".navigation").toggleClass("active-nav1");	
		$("#mainArea").toggleClass("active-nav2");
		$(".line-1,.line-2").toggleClass("line-active-1");
		$(".line-3,.line-4").toggleClass("line-active-2");	
	})
	
	$(".menu").click(function(){
		if($(this).attr('disabled')== "disabled"){
			
		}else{
			$(this).attr('disabled','disabled');
			if($(this).hasClass("active-menu")){
					$(this).next().slideUp(500);
					$(this).addClass("active-result");
					$(".menu").removeClass("active-menu");
			}else{
				$(".menu-2").slideUp(500);
				$(this).removeClass("active-result");
				$(this).addClass("active-menu");
				$(this).next().slideDown(500);
			}
			setTimeout(function(){
				$(".menu").removeAttr('disabled');
			},1000)
		}
			
	})
});