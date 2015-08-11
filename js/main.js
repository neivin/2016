//Trim the fat

		$(document).ready(function() {
		    $("#homeButton").click(function() {
		        scrollFunction("main");
		    });
		    $("#aboutButton").click(function() {
		        scrollFunction("about");
		    });
		    $("#eventButton").click(function() {
		        scrollFunction("about");
		    });
		    $("#contactButton").click(function() {
		        scrollFunction("contact");
		    });


		});

		function scrollFunction(divName) {
		    divToScrollTo = "#".concat(divName)
		    $('html, body').animate({
		        scrollTop: $(divToScrollTo).offset().top - 50
		    }, 1000);
		}



