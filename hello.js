$(document).ready(function() {
	$("#s").click(function() {
		var n = $("#n").val();
		$("#result").html("Hello " + n + "! Have a nice day");
		$("#n").val("");
	});
});