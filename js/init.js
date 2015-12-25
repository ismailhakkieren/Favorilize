(function ($) {
	$('.sidebar-collapse').sideNav({
		edge: 'left', 
	});

	$('.menu-sidebar-collapse').sideNav({
		menuWidth: 240,
		edge: 'left', 
	});
	
})(jQuery);

// Toggle Flow Text
var toggleFlowTextButton = $('#flow-toggle')
toggleFlowTextButton.click(function() {
	$('#flow-text-demo').children('p').each(function() {
	  $(this).toggleClass('flow-text');
	})
});

$(document).ready(function(){
    $('#example').DataTable();
});


$(document).ready(function() {
    $(window).load(function() {
       $('select').material_select();
    });
});