jQuery(document).ready(function () {

	"use strict";

	arlo_tm_bg_nav();
	//arlo_tm_popup();
	arlo_tm_anchor();
	arlo_tm_down();
	arlo_tm_imgtosvg();
	arlo_tm_scrollable();
	arlo_tm_switcher();
	arlo_mobile_menu();
	arlo_tm_data_images();
	arlo_tm_jarallax();
	arlo_tm_portfolio();
	arlo_tm_projects();
	arlo_tm_isotope();
	arlo_tm_contact_form();
	arlo_tm_videoplayer();
	arlo_tm_totop();

	jQuery(window).on('resize', function () {
		arlo_tm_scrollable();
		arlo_tm_isotope();
	});

	jQuery(window).on('scroll', function () {
		arlo_tm_bg_nav();
	});

	jQuery(window).load('body', function () {
		setTimeout(function () {
			jQuery('.preloader').addClass('loaded');
		}, 1000);
	});

});

function arlo_tm_bg_nav() {
	"use strict";

	jQuery(window).on('scroll', function () {
		var menu = jQuery('.navbar');
		var WinOffset = jQuery(window).scrollTop();

		if (WinOffset >= 150) {
			menu.addClass('animate');
		} else {
			menu.removeClass('animate');
		}
	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------
/*
function arlo_tm_popup() {
	"use strict";

	jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});

	jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});

	jQuery('.popup-youtube').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}
*/
// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function arlo_tm_anchor() {

	"use strict";

	jQuery('.topbar .dropdown .dropdown_inner ul li a').off().on('click', function (e) {
		e.stopPropagation();
		var element = jQuery(this);
		var url = element.attr('href');
		if (url !== '#' && url.charAt(0) === '#') {
			$('html, body').animate({
				scrollTop: $(url).offset().top
			}, 1000);
		}
		return false;
	});

	jQuery('.navbar .inner .menu ul li a').off().on('click', function (e) {
		e.stopPropagation();
		var element = jQuery(this);
		var url = element.attr('href');
		if (url !== '#' && url.charAt(0) === '#') {
			$('html, body').animate({
				scrollTop: $(url).offset().top - 90
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function arlo_tm_down() {

	"use strict";

	jQuery('.arrow_wrap a').on('click', function () {
		if ($.attr(this, 'href') !== '#') {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 1000);
		}
		return false;
	});

	jQuery('.extra_hero_content .button_two a').on('click', function () {
		if ($.attr(this, 'href') !== '#') {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function arlo_tm_imgtosvg() {

	"use strict";

	jQuery('img.svg').each(function () {

		var jQueryimg = jQuery(this);
		var imgClass = jQueryimg.attr('class');
		var imgURL = jQueryimg.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function arlo_tm_scrollable() {

	"use strict";

	var H = jQuery(window).height();
	var scrollable = jQuery('.sidebar .inner .menu.scrollable');
	var verMenu = jQuery('.sidebar .inner .menu');
	var logoHeight = jQuery('.sidebar .inner .logo').outerHeight();
	var socialHeight = jQuery('.sidebar .inner .bottom').outerHeight() + 100;

	verMenu.css({ height: H - logoHeight - socialHeight });

	scrollable.each(function () {
		var element = jQuery(this);

		element.css({ height: H - logoHeight - socialHeight }).niceScroll({
			touchbehavior: false,
			cursorwidth: 0,
			autohidemode: true,
			cursorborder: "0px solid #eee"
		});
	});
}

// -----------------------------------------------------
// -----------------    SWITCHER    --------------------
// -----------------------------------------------------

function arlo_tm_switcher() {

	"use strict";

	var switcherOpener = jQuery('.sidebar .inner .resize');
	var switcherIcon = jQuery('.sidebar .inner .resize a span');
	var leftPart = jQuery('.sidebar');
	var rightPart = jQuery('.rightpart');
	var WW = jQuery(window).width();

	switcherOpener.on('click', function () {
		if (WW >= 1600) {
			if (switcherOpener.hasClass('opened')) {
				switcherOpener.removeClass('opened');
				switcherIcon.removeClass('opened');
				leftPart.removeClass('opened');
				rightPart.removeClass('opened');
			} else {
				switcherOpener.addClass('opened');
				switcherIcon.addClass('opened');
				leftPart.addClass('opened');
				rightPart.addClass('opened');
			}
		} else {
			if (switcherOpener.hasClass('opened')) {
				switcherOpener.removeClass('opened');
				switcherIcon.removeClass('opened');
				leftPart.removeClass('opened2');
				rightPart.removeClass('opened');
			} else {
				switcherOpener.addClass('opened');
				switcherIcon.addClass('opened');
				leftPart.addClass('opened2');
				rightPart.addClass('opened');
			}
		}
		if (jQuery('.jarallax').length) {
			jQuery('.jarallax').jarallax('destroy');
			setTimeout(function () { arlo_tm_jarallax(); }, 300);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function arlo_mobile_menu() {

	"use strict";

	var trigger = jQuery('.topbar .topbar_inner .trigger');
	var triggerClose = trigger.find('a .close');
	var triggerMenu = trigger.find('a .menu');
	var dropdown = jQuery('.topbar .dropdown');

	trigger.on('click', function () {
		var element = jQuery(this);
		if (element.hasClass('opened')) {
			element.removeClass('opened');
			triggerMenu.removeClass('closed');
			triggerClose.removeClass('opened');
			dropdown.slideUp();
		} else {
			element.addClass('opened');
			triggerMenu.addClass('closed');
			triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function arlo_tm_data_images() {

	"use strict";

	var data = jQuery('*[data-img-url]');

	data.each(function () {
		var element = jQuery(this);
		var url = element.data('img-url');
		element.css({ backgroundImage: 'url(' + url + ')' });
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function arlo_tm_jarallax() {

	"use strict";

	jQuery('.jarallax').each(function () {
		var element = jQuery(this);
		var customSpeed = element.data('speed');

		if (customSpeed !== "undefined" && customSpeed !== "") {
			customSpeed = customSpeed;
		} else {
			customSpeed = 0.5;
		}

		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// --------------------   SKILLS    --------------------
// -----------------------------------------------------

function tdProgress(container) {

	"use strict";

	container.find('.progress_inner').each(function () {
		var progress = jQuery(this);
		var pValue = parseInt(progress.data('value'), 10);
		var pColor = progress.data('color');
		var pBarWrap = progress.find('.bar');
		var pBar = progress.find('.bar_in');
		pBar.css({ width: pValue + '%', backgroundColor: pColor });
		setTimeout(function () { pBarWrap.addClass('open'); });
	});
}

jQuery('.arlo_progress').each(function () {

	"use strict";

	var pWrap = jQuery(this);
	pWrap.waypoint({ handler: function () { tdProgress(pWrap); }, offset: '90%' });
});

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function arlo_tm_portfolio() {

	"use strict";

	if (jQuery().isotope) {

		// Needed variables
		var list = jQuery('.portfolio .portfolio_list ul');
		var filter = jQuery('.portfolio .portfolio_filter ul');

		if (filter.length) {
			// Isotope Filter 
			filter.find('a').on('click', function () {
				var selector = jQuery(this).attr('data-filter');
				list.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});

			// Change active element class
			filter.find('a').on('click', function () {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});
		}
	}
}

function arlo_tm_projects() {

	"use strict";

	jQuery('.arlo_tm_portfolio_animation_wrap').each(function () {
		jQuery(this).on('mouseenter', function () {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function (e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function () {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function arlo_tm_isotope() {

	"use strict";

	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {

		}
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function arlo_tm_contact_form() {

	"use strict";

	jQuery(".contact_form #send_message").on('click', function () {

		var name = jQuery(".contact_form #name").val();
		var email = jQuery(".contact_form #email").val();
		var message = jQuery(".contact_form #message").val();
		var subject = jQuery(".contact_form #subject").val();
		var success = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if (name === '' || email === '' || message === '') {

			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {

				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if (jQuery(".contact_form .returnmessage span.contact_error").length) {
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				} else {
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if (data === "") {
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function arlo_tm_videoplayer() {
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function arlo_tm_totop() {

	"use strict";

	jQuery(".arlo_tm_footer .footer_inner .top a").on('click', function (e) {
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}