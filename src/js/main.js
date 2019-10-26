$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
});

$(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() != 0) {

      $('#up').fadeIn();

    } else {

      $('#up').fadeOut();

    }

  });

  $('#up').click(function () {

    $('body,html').animate({ scrollTop: 0 }, 800);

  });

});