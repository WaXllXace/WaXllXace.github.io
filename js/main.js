function m_scroll(targetID) {
	var target = $(targetID).offset().top;
	$("html, body").animate({ scrollTop: target }, 600);
	return false;
}

$(document).ready(function(){

	$('#skill_list > li').hover(function(){
		var index = $(this).index();
		var neighbor1 = $('#skill_list > li:eq('+(index-1)+')');
		var neighbor2 = $('#skill_list > li:eq('+(index+1)+')');
		$(this).css("transform","scale(2.0)");
		$(this).css("margin","0px 30px");
		neighbor1.css("transform","scale(1.5)");
		neighbor1.css("margin","0px 20px");
		neighbor2.css("transform","scale(1.5)");
		neighbor2.css("margin","0px 20px");
	},function(){
		var index = $(this).index();
		var neighbor1 = $('#skill_list > li:eq('+(index-1)+')');
		var neighbor2 = $('#skill_list > li:eq('+(index+1)+')');
		$(this).css("transform","");
		$(this).css("margin","0px");
		neighbor1.css("transform","");
		neighbor1.css("margin","0px");
		neighbor2.css("transform","");
		neighbor2.css("margin","0px");
	});

});
