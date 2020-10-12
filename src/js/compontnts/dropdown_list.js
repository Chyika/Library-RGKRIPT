const listDropdown = $('.list-dropdown')
const listItems = listDropdown.find('.list-dropdown__item')

listItems.each(function (key, currentItem) {
  let _this = $(currentItem)
  let headerItem = $(this).find('.item-list-dropdown__header')
  let containerList = $(this).find('.item-list-dropdown__list')
  let childListItem = $(this).find('.list-dropdown__item-child') // Getting child elements

  /* Обработка клика по заголовку */
  headerItem.on('click', function () {
    /* Перебор вложенных элементов*/
    childListItem.each(function (key) {
      setTimeout(() => {
        $(this).toggleClass('list-dropdown__item--open');
      }, 100 * key )
    })
    _this.find('.item-list-dropdown__list').height( _this.hasClass('list-dropdown__item--open')
      ? 0
      : `${_this.find('.item-list-dropdown__list')[0].scrollHeight}px` )
    setTimeout(() => {
      _this.toggleClass('list-dropdown__item--open');
    }, _this.hasClass('list-dropdown__item--open') ? 0 : 300)
  })

})

$(window).on('resize', () => {
  // $('.item-list-dropdown__list').height(`${$(currentItem).find('.item-list-dropdown__list')[0].scrollHeight}px`)
})


