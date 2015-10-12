		$(document).ready(function () {
			$("#homeButton").click(function () {
				//$(this).animate(function(){
				$('html, body').animate({
					scrollTop: $("#main").offset().top -50
				}, 1000);
				//});
			});
		});

$(document).ready(function () {
			$("#aboutButton").click(function () {
				//$(this).animate(function(){
				$('html, body').animate({
					scrollTop: $("#about").offset().top -50
				}, 1000);
				//});
			});
		});

$(document).ready(function () {
			$("#eventButton").click(function () {
				//$(this).animate(function(){
				$('html, body').animate({
					scrollTop: $("#about").offset().top -50
				}, 1000);
				//});
			});
		});

$(document).ready(function () {
			$("#cocButton").click(function () {
				//$(this).animate(function(){
				$('html, body').animate({
					scrollTop: $("#coc").offset().top -50
				}, 1000);
				//});
			});
		});

		$(document).ready(function () {
			$("#contactButton").click(function () {
				//$(this).animate(function(){
				$('html, body').animate({
					scrollTop: $("#contact").offset().top -50
				}, 1000);
				//});
			});
		});

 //Hamburger menu toggle
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });