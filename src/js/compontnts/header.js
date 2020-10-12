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
  $(this).toggleClass('btn-toggle-nav--open')
})

