$(document).ready(function(){
	$(".cta-btn").click(function(){
		validateForm();
	});

	function validateForm(){
		var nameReg = /^[A-Za-z]+$/;
		alert("it worked");

		var name = $("#name").val();
		var email = $("#email").val();
		var msg = $("#msg").val();

	}
})