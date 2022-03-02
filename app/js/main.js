$(function () {
	$('.top-slider__list').slick({
		infinite: false,
		arrows: true,
		dots: true,
		dotsClass: "top-slider__dots",
		prevArrow: '<button class="top-slider__btn top-slider__btn--prev" type="button"><div class="sr-only">следующий слайд</div></button>',
		nextArrow: '<button class="top-slider__btn top-slider__btn--next" type="button"><div class="sr-only">следующий слайд</div></button>',
	});


	$('.brends__list').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}
		]
	});


	$('.tape__btn').on('click', function () {
		$('.tape__btn').toggleClass('tape__btn--active');
		$('.tape__list').slideToggle();

		let btnCategories = $(".tape__btn"); // указываем кнопку
		let categories = $(".tape__list");

		$(document).on('click', function (e) { // событие клика по веб-документу
			if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
				// если клик был не по нашему блоку
				!categories.is(e.target) && categories.has(e.target).length === 0
				// и не по его дочерним элементам
			) {
				categories.slideUp();
				// скрываем его
			}
		});

	});


	$('.categories-btn').on('click', function () {
		$('.categories-btn').toggleClass('categories-btn--open');

		$('.categories__list').slideToggle();
	});

	$('.offers-btn').on('click', function () {
		$('.offers-btn').toggleClass('offers-btn--open');
		$('.offers__list').slideToggle();
	});

	$('.firm-btn ').on('click', function () {
		$('.firm-btn').toggleClass('firm-btn--open');
		$('.firm__list').slideToggle();
	});

	$('.range-btn').on('click', function () {
		$('.range-btn').toggleClass('range-btn--open');
		$('.range__items').slideToggle();
	});

	// Сетка продуктов Grid products 

	$('.shop__filter-btn').on('click', function () {
		$('.shop__filter-btn').removeClass('shop__filter-btn--active');
		$(this).addClass('shop__filter-btn--active');
	});

	$('.button-list').on('click', function (){
		$('.shop__list').addClass('shop__list--column');
	});

	$('.button-grid').on('click', function (){
		$('.shop__list').removeClass('shop__list--column');
	});
	
	var containerEl1 = document.querySelector('[data-ref="mix-1"]');
	var containerEl2 = document.querySelector('[data-ref="mix-2"]');

	var config = {
		controls: {
			scope: 'local'
		}
	};

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);



});


$('.users__link--search').on('click', function () {
	$('.form-search').toggleClass('form-search--active');
});

$('.header__menu-btn').on('click', function () {
	$('.mobile').toggleClass('mobile--open');
	$('body').toggleClass('lock');
	$('.overlay').toggleClass('overlay--on');
});

$('.mobile__close-menu').on('click', function () {
	$('.mobile').removeClass('mobile--open');
	$('body').removeClass('lock');
	$('.overlay').removeClass('overlay--on');
});

$(function () {
	const rangeSlider = document.getElementById('range-slider');

	noUiSlider.create(rangeSlider, {
	start: [1000, 3000],
	connect: true,
	step: 1,
	range: {
		'min': [100],
		'max': [5000]
		}
	});

	const input0 = document.getElementById('input-range-0');
	const input1 = document.getElementById('input-range-1');

	const inputs = [input0, input1]

	rangeSlider.noUiSlider.on('update', function(values, handle) {
		inputs [handle].value = Math.round (values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider (index, e.currentTarget.value);
		});
	});
});

$(function () {
	$('.sel1, .counter-iter').styler();

}); 


$(".products__star").rateYo({
	starWidth: "16px",
	normalFill: "#C1C1C1",
	// starSvg: "<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">"+
	// 			"<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
	// 					" 4.246-3.611-2.625-3.612 2.625"+
	// 					" 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
	// 					" 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
	// 					" 7.416 5.388-2.833-8.718"+
	// 					" 7.417-5.389h-9.167l-2.833-8.718z"></path>"
	// 		"</svg>"
});



