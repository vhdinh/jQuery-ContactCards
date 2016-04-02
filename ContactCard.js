$(document).ready(function(){

// create variables to store the inputs
	var first;
	var last;
	var description;
	
	$('#submit').click(function(){
		 first = $('#first').val();
		 last = $('#last').val();
		 description = $('#description').val();

		$('#right').append("<div reverse='" + description + "' class='ncontact'>" + first + " " + last + "<br> <span>Click for description!</span></div>")
		
		// clear form inputs when submitted
		$('form').find("input:text").val("");
		$('form').find("#description").val("");

	$(document).on('click','.ncontact', function(){
		console.log($(this).attr("reverse"));
		$(this).html($(this).attr("reverse"));
	})
		return false;
	})

})