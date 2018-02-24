$(window).scroll(function(){
 var scroll = $(window).scrollTop();

 if (scroll >= 600){
  $('.invisible').css({'margin-top' : '0px'});
 }
  else if (scroll < 600){
  $('.invisible').css({'margin-top' : '-80px'});
 }
});


$(function(){
    linkInterno = $('a[href^="#"]');

    linkInterno.on('click',function(animado) {
    animado.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $(href).offset().top }, 800);
    });
});
