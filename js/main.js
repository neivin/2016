$(document).ready(function () {
	$("#homeButton").click(function () {
		scrollFunction("main");
	});
	$("#aboutButton").click(function () {
		scrollFunction("about");
	});
	$("#eventButton").click(function () {
		scrollFunction("about");
	});
	$("#cocButton").click(function () {
		scrollFunction("coc");
	});
	$("#contactButton").click(function () {
		scrollFunction("contact");
	});
	$(".navbar-nav li a").click(function (event) {
		// check if window is small enough so dropdown is created
		var toggle = $(".navbar-toggle").is(":visible");
		if (toggle) {
			$(".navbar-collapse").collapse('hide');
		}
	});
});

function scrollFunction(divName) {
	divToScrollTo = "#".concat(divName)
	$('html, body').animate({
		scrollTop: $(divToScrollTo).offset().top - 50
	}, 1000);
}