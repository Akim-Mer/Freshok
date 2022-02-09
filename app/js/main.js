$(function(){
	$('.top-slider__list').slick({
		arrows: true,
		prevArrow: '<button class="btn-prev" type="button"><div class="sr-only">следующий слайд</div></button>',
		nextArrow: '<button class="btn-next" type="button"><div class="sr-only">следующий слайд</div></button>',
	});

  
	$('.brends__list').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: false,
	});


	$('.dropdown__btn').on('click', function() {
		$('.dropdown__btn').toggleClass('dropdown__btn--active');
		$('.dropdown__list').slideToggle();

		let btnCategories = $(".dropdown__btn"); // указываем кнопку
		let categories = $(".dropdown__list");

		$(document).on('click', function (e) { // событие клика по веб-документу
			if ( ! btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
					// если клик был не по нашему блоку
					! categories.is(e.target) && categories.has(e.target).length === 0
					// и не по его дочерним элементам
					) {
				categories.fadeOut();
				 // скрываем его
				}
			});
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

