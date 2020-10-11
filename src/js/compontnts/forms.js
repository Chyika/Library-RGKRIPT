function overlayClose() {
  $('.overlays').removeClass('overlay-show')
  $('body').removeClass('stop-scroll')
  $('.form-overlay').removeClass('form-overlay-active')
}

$('.btn-sign-up').on('click', function () {
  overlayClose()
  $('.overlays').addClass('overlay-show')
  $('body').addClass('stop-scroll')
  $('#form-sign-up').addClass('form-overlay-active')
})

$('.btn-sign-in').on('click', function () {
  overlayClose()
  $('.overlays').addClass('overlay-show')
  $('body').addClass('stop-scroll')
  $('#form-sign-in').addClass('form-overlay-active')
})

$('.overlays').on('click', function (event) {
  if (event.target !== this) return
  overlayClose()
})

$('.form-btn-close').on('click', function (event) {
  overlayClose()
})


$('.btn-sign-in-send, .btn-sign-up-send').on('click', function () {
  let inputs = $(this).closest('form').find('input')

  inputs.each(function (key, item) {
    const input = $(item).closest('.input-default');
    input.removeClass('input-invalid')
    input.removeClass('input-valid')
    input.find('.input-message').html('')

    if ($(item).val() === "") {
      input.addClass('input-invalid')
      input.find('.input-message').html('Поле не может быть пустым')
    } else {
      input.addClass('input-valid')
    }
  })
})



