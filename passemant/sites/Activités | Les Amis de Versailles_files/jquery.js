// plugin toUppercase
(function($){
	$.fn.toUp = function(){
		str = this.val().toUpperCase();
		this.val(str);
		this.css("text-transform","uppercase");
		this.keyup(function() {
			str = $(this).val().toUpperCase();
			$(this).val(str);
		});
	}
}( jQuery ));
