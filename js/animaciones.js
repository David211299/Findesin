$(window).scroll(function(){
 var scroll = $(window).scrollTop();

 if (scroll >= 600){
  $('.invisible').css({'margin-top' : '0px'});
 }
  else if (scroll < 600){
  $('.invisible').css({'margin-top' : '-80px'});
 }
});

/* ------------------------------------------------------------------------ */

$(function(){
    linkInterno = $('a[href^="#"]');

    linkInterno.on('click',function(animado) {
    animado.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $(href).offset().top }, 800);
    });
});

/* ------------------------------------------------------------------------ */

$(function(){
  $(".btn-1").click(function(){
    $(this).toggleClass("btn-active")
    $(".re-1").toggleClass("res_text-active");
  });

  $(".btn-2").click(function(){
    $(this).toggleClass("btn-active")
    $(".re-2").toggleClass("res_text-active");
  });

  $(".btn-3").click(function(){
    $(this).toggleClass("btn-active")
    $(".re-3").toggleClass("res_text-active");
  });

  $(".btn-4").click(function(){
    $(this).toggleClass("btn-active")
    $(".re-4").toggleClass("res_text-active");
  });
});
