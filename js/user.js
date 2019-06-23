if ($(window).width() > 768) {
	// 選單置頂
	$(window).scroll(function () {
		if ($(this).scrollTop() > 480) {
			$('.sub-nav').addClass('navFixed').addClass('animated slideInDown');
		} else {
			$('.sub-nav').removeClass('navFixed animated slideInDown');
		}
	});
}

$(document).ready(function () {
	//scroll-down
	$('.scroll-down a').bind('click', function(event) {
		// alert("hi");
		 var $anchor = $(this);
		 $('html, body').stop().animate({
		   scrollTop: $($anchor.attr('href')).offset().top
		 }, 1500);
		 event.preventDefault();
	   });
	//錨點
	function scrollNav() {
		$('.sub-nav a').click(function () {

			//Animate
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 160
			}, 400);
			return false;
		});
		$('.scrollTop a').scrollTop();
	}
	scrollNav();
	if ($(window).width() < 768) {
		$(window).scroll(function () {
			last = $("body").height() - $(window).height()
			if ($(window).scrollTop() >= last) {
				$(".footer_fix").hide()
			} else {
				$(".footer_fix").show()
			}
		})
	}

	$('.tutor .btn-nav .main-btn').click(function () {
		event.preventDefault();
		$('.tutor .btn-nav ul').toggleClass('active-nav')
	})
	$('.Precautions .con h3').click(function () {
		$('.Precautions .con h3').toggleClass('rotate-arrow')
		$('.Precautions .con ol').slideToggle();
	})
	$(".tab-list").on("click", ".tab", function (e) {
		e.preventDefault();

		$(".tab").removeClass("active-tab");
		$(".tab-content").removeClass("show");
		$(this).addClass("active-tab");
		$($(this).attr('href')).addClass("show");
	});
	$(".tab-list-1").on("click", ".tab-1", function (e) {
		e.preventDefault();

		$(".tab-1").removeClass("active-tab");
		$(".tab-content-1").removeClass("show");
		$(this).addClass("active-tab");
		$($(this).attr('href')).addClass("show");
	});


	// nav
	// $('.main-nav ul li a').click(function () {
	// 	$('.target-burger,.main-nav,header .container').removeClass('toggled')
	// 	// $('.navbar-toggle').removeClass('active-toggle')
	// })
	$('.main-nav ul .dropdown').each(function () {
		$(this).find('.sec').click(function () {

			event.preventDefault();
			$(this).next('.dropdown-menu').toggleClass('active-dropdown-menu')
		})
	})
	AOS.init();
	$('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1500,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	$('a.target-burger').click(function (e) {
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		$('header').toggleClass('toggled-fixed');
		e.preventDefault();
	});
})