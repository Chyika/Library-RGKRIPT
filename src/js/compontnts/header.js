const header =  $('header')

// Изменение в шапке при скроле
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    header.addClass('not-transparent')
    $('.container-btn-account > .btn-secondary-outline-light').addClass('btn-secondary-outline-dark').removeClass('btn-secondary-outline-light')
  } else {
    header.removeClass('not-transparent')
    $('.container-btn-account > .btn-secondary-outline-dark').addClass('btn-secondary-outline-light').removeClass('btn-secondary-outline-dark')
  }
});

