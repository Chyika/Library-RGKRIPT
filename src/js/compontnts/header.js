const header =  $('header')
const headerIndexPage =  $('#index-page').find('header')

// Изменение в шапке при скроле
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    headerIndexPage.removeClass('header--transparent')
    // $('.container-btn-account > .btn-secondary-outline-light').addClass('btn-secondary-outline-dark').removeClass('btn-secondary-outline-light')
  } else {
    headerIndexPage.addClass('header--transparent')
    // $('.container-btn-account > .btn-secondary-outline-dark').addClass('btn-secondary-outline-light').removeClass('btn-secondary-outline-dark')
  }
});

// Click on btn-toggle-nav
$('.btn-toggle-nav').on('click', function () {
  if ($(this).hasClass('btn-toggle-nav--open')) {
    $('.overlay').removeClass('overlay-show')
    $('body').removeClass('stop-scroll')
    $('.overlay__form').removeClass('form-overlay-active')
  } else {
    $('.overlay').removeClass('overlay-show')
    $('body').removeClass('stop-scroll')
    $('.overlay__form').removeClass('form-overlay-active')

    $('.overlay').addClass('overlay-show')
    $('body').addClass('stop-scroll')
    $('#form-sign-in').addClass('form-overlay-active')
  }
  $(this).toggleClass('btn-toggle-nav--open')
  header.toggleClass('header--only-btn-nav')
})


$('.btn-toggle-nav').on('click', function (event) {

})

