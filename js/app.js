//           ЭТО ДЛЯ ПЛАВНОЙ 
//          ПРОКРУТКИ СТРАНИЦЫ
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
//           ЭТО ВЫПАДАЮЩЕЕЕ
//                МЕНЮ
$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//          ЭТО ЧТОБЫ МЕНЮ
	//   ЗАКРЫВАЛОСЬ ПРИ КЛИКЕ НА ССЫЛКУ
	$('.menu__link').click(function(e) {
		e.preventDefault();
		$('.menu').toggleClass('active');
	})
});