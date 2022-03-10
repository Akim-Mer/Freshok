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

	$('.cart__btn').on('click', function () {
		$('.basket').toggleClass('basket--open');
		$('body').toggleClass('lock');
		$('.overlay').toggleClass('overlay--on');
	});

	$('.basket__close-menu').on('click', function () {
		$('.basket').removeClass('basket--open');
		$('body').removeClass('lock');
		$('.overlay').removeClass('overlay--on');
	});



	//catalog-page
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

	$('.button-list').on('click', function () {
		$('.shop__list').addClass('shop__list--column');
	});


	$('.button-grid').on('click', function () {
		$('.shop__list').removeClass('shop__list--column');
	});


	$('.shop__filter-panel').on('click', function () {
		$('.control').toggleClass('control--open');
		$('body').toggleClass('lock');
		$('.overlay').toggleClass('overlay--on');
	});

	$('.control__close-panel').on('click', function () {
		$('.control').removeClass('control--open');
		$('body').removeClass('lock');
		$('.overlay').removeClass('overlay--on');
	});





	//mixitup	

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

	rangeSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
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
			setRangeSlider(index, e.currentTarget.value);
		});
	});
});

$(function () {
	$('.sel1, .counter-iter').styler(); // iter - iteration

	$('.products__images-box').slick({
		infinite: false,
		arrows: true,
		prevArrow: '<button class="products__btn-slide products__btn-slide--prev" type="button"><div class="sr-only">следующий слайд</div></button>',
		nextArrow: '<button class="products__btn-slide products__btn-slide--next" type="button"><div class="sr-only">следующий слайд</div></button>',
	});

	$('.info__link').on('click', function (e) {
		e.preventDefault();
		$('.info__link').removeClass('info__link--light');
		$(this).addClass('info__link--light');

		$('.tabs__item').removeClass('tabs__item--active');
		$($(this).attr('href')).addClass('tabs__item--active');


	});

	$('.offers-slider__content').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		prevArrow: '<button class="offers-slider__btn offers-slider__btn--prev" type="button"> <span class="sr-only">предыдущий слайд</span> </button>',
		nextArrow: '<button class="offers-slider__btn offers-slider__btn--next" type="button"> <span class="sr-only">следующий слайд</span> </button>',


		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					variableWidth:true,
				}
			}
		]
	});
});


$(".star").rateYo({
	starWidth: "16px",
	spacing: "6px",
	starSvg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z" /></svg>`, //убирать fill
	normalFill: "#C1C1C1", //фон
	ratedFill: "#FFB800", // цвет звезды

});

// basket

// const productsBtn = document.querySelectorAll('.product-card__cart');
// const basketList = document.querySelector('.basket__list');
// const cartBtn = document.querySelector('.cart__btn');
// const userQuantity = document.querySelector('.user__quantity');
// const basketSum = document.querySelector('.basket__sum');
// let price = 0;

// const randomId = () => {
// 	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// };

// const priceWithoutSpaces = (str) => {
// 	return str.replace(/\s/g, '');
// };

// const normalPrise = (str) => {
// 	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1');
// };

// const generateCartProduct = (img, title, price, id) => {
// 	return `
// 			<li class="basket__item">
// 			<article class="basket__card-product card-product">
// 				<div class="card-product__product-box">

// 					<a class="card-product__link" href="#">
// 						<img class="card-product__img" src="images/ananas.png" alt="">
// 					</a>

// 					<div class="card-product__text-box">
// 						<span class="card-product__name">Ананас, 1 кг</span>
// 						<span class="card-product__quantity">999<span
// 						class="card-product__currency">₽</span> </span>
// 					</div>									
// 				</div>

// 				<div class="card-product__count-box">
// 					<form class="card-product__form" action="">
// 						<input  class="card-product__counter counter-iter" type="number" value="1" min="1" max="99" >
// 					</form>

// 					<span class="card-product__number">1998<span
// 					class="card-product__currency">₽</span> </span>
// 				</div>

// 				<button  class="card-product__delete-btn close-menu" type="button">
// 					<span class="sr-only">удалить товар</span>
// 				</button>

// 			</article>
// 		</li>
// 	`;
// };