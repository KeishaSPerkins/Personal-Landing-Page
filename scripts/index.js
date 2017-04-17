new Clipboard('.copyable');

$('document').ready(function(){
	$('.email').click(function(){
  	$('.alert.email-copy').fadeIn( 1000 ).delay( 2000 ).fadeOut( 1000 );
	})
  
})

$( document ).ready(function() {
  var d = new Date();
  var y = d.getYear() + 1900;
  $('#this-year').text(y);
});