(function ($) {
	$('.sidebar-collapse').sideNav({
		edge: 'left', 
	});

	$('.menu-sidebar-collapse').sideNav({
		menuWidth: 240,
		edge: 'left', 
	});
	
})(jQuery);

$(document).ready(function(){
    $('#example').DataTable();
});


$(document).ready(function() {
    $(window).load(function() {
       $('select').material_select();
    });
});