$(function(){
	var curr = 0;
	$("#jsNav a.trigger").each(function(i){
		$(this).click(function(){
			curr = i;
			$("#js img").eq(i).fadeIn("fast").siblings("img").fadeOut("fast");
			$(this).addClass("imgSelected").siblings().removeClass("imgSelected");
		});
	});
	var timer = setInterval(function(){
		var go = (curr + 1) % 5;
		$("#jsNav a.trigger").eq(go).click();
	},3000);
	$("#js,#next,#prev").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
		var go = (curr + 1) % 5;
		$("#jsNav a.trigger").eq(go).click();
	},3000);
	});
	$("#next").click(function(){
		if(curr == 4){
			var go = 0;
		}else{
			var go = (curr + 1) % 5;
		}
		$("#jsNav a.trigger").eq(go).click();
	});
	$("#prev").click(function(){
		if(curr == 0){
			var go = 4;
		}else{
			var go = (curr - 1) % 5;
		}
		$("#jsNav a.trigger").eq(go).click();
	});
});