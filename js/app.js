$(document).ready(function(){
	$(".Ryu").on('mouseenter',function(){
		$('.RyuS').hide();
		$('.RyuR').show();
		$(".RyuC").hide();
	})
	.on('mouseleave',function(){
		$('.RyuR').hide();
		$('.RyuS').show();
		$(".RyuC").hide();
	})
	.on('mousedown',function(){
		playHadouken();
		$('.RyuR').hide();
		$(".RyuC").hide();
		$('.RyuT').show();
		$('.Hadouken').finish().show()
		.animate({'left':'1000px'},500,function(){
		$(this).hide().css('left','380px');
	});
	})
	.on('mouseup',function(){
		$(".RyuT").hide();
		$(".RyuR").show();
		$(".RyuC").hide();
	});
	$(document).keydown(function(e){
		if(e.keyCode==88){
			$(".RyuR").hide();
			$(".RyuC").show();
			$('.RyuS').hide();
			$('.RyuT').hide();
		}
	}).keyup(function(e){
		if(e.keyCode==88){
		$(".RyuR").hide();
		$(".RyuC").hide();
		$('.RyuS').show();
		}
	});
});
	function playHadouken(){
		$('#HadoukenAud')[0].volume=0.5;
		$('#HadoukenAud')[0].load();
		$('#HadoukenAud')[0].play();
}
		

