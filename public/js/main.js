$('document').ready(function () {
	// Initializing the search box
	$.post('/products/', results => {
		$('.search-large-form .autocomplete').autocomplete({
			data: results.data,
			limit: 5,
			onAutocomplete: () => {
				$('.search-large-form').trigger('submit');
			}
		});

		$('.search-small-form .autocomplete').autocomplete({
			data: results.data,
			limit: 5,
			onAutocomplete: () => {
				$('.search-small-form').trigger('submit');
			}
		});
	});

	// Fading out the scroll to top button by default.
	$('#scroll-to-top').fadeOut(0);

	// Initializing the dropdown.
	$('.dropdown-trigger').dropdown({
		autoTrigger: false,
		closeOnClick: false,
		constrainWidth: false,
		coverTrigger: false,
		hover: true
	});

	// Initializing the burger menu's sidenav.
	$('#nav-sidebar').sidenav({
		edge: 'right'
	});

	// Initializing the modals.
	$('.modal').modal();

	// Initializing the header carousel.
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});

	// Opening the search-navbar.
	$('.search-btn').on('click', () => {
		$('.search-navbar').fadeIn();
		$('.search-navbar input').focus();
	});

	// Closing the search-navbar.
	$('.search-close-btn').on('click', () => {
		$('.search-navbar').fadeOut();
	});

	// Sliding the carousel every 8 seconds.
	setInterval(() => {
		$('.carousel.carousel-slider').carousel('next');
	}, 8000);

	// Initializing the brands carousel.
	$('.carousel.carousel--brands').carousel({
		dist: -50,
		fullWidth: false,
		indicators: true,
		numVisible: 5,
		padding: 100
	});

	// Scrolling to the about section.
	$('.about-btn').on('click', () => {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $('#about').offset().top
			},
			500
		);
	});

	// Detecting scrolling behavior.
	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 600) {
			$('#scroll-to-top').fadeIn(500);
		} else {
			$('#scroll-to-top').fadeOut(500);
		}
	});

	// The scroll-to-top button press event.
	$('#scroll-to-top').on('click', () => {
		$('body,html').animate(
			{
				scrollTop: 0
			},
			300
		);
	});

	// The back button click.
	$('#back-btn').on('click', () => {
		history.back();
	});

	// Flash message dismiss
	$('.flash-card .flash-card__close').on('click', function () {
		$(this)
			.closest('.flash-card')
			.slideUp();
	});

	$('body,html').animate({ scrollTop: 0 }, 300);
	// Displaying the content.
	setTimeout(function () {
		$('#global-preloader').fadeOut();
		$('body').removeClass('loading');
	}, 500);
});
