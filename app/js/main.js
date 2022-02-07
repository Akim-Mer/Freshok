$(document).ready(function(){
  $('.top-slider__list').slick({
	arrows: true,
  });
  
  $('.brends__list').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: false,
  });
});

$(function(){
	$('.dropdown__btn').on('click', function() {
		$('.dropdown__btn').toggleClass('dropdown__btn--active');
		$('.dropdown__list').toggleClass('dropdown__list--active');
	});

	// $('.product-card__btn').on('click', function() {
	// 	$('.product-card__btn').toggleClass('product-card__btn--light');
	
	// }); - Хотел сделать скрипт, что бы когда нажимаешь на сердечко оно оставалось с желтым цветом

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

