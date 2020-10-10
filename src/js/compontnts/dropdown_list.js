const dropdownList = $('.container-textbook-list')
const listItems = dropdownList.find('.textbook-item')

listItems.each(function (key, currentItem) {
  let _this = $(currentItem)
  let headerItem = $(this).find('.textbook-header')
  let containerList = $(this).find('.textbook-list')
  let childListItem = $(this).find('.textbook-item-child') // Getting child elements

  headerItem.on('click', function () {

    childListItem.each(function (key) {
      setTimeout(() => {
        $(this).toggleClass('list--close');
      }, _this.hasClass('list--close') ? 0 : 100 * key)
    })

    _this.find('.textbook-list').height(`${_this.find('.textbook-list')[0].scrollHeight}px`)

    setTimeout(() => {
      _this.toggleClass('list--close');
    }, _this.hasClass('list--close') ? 0 : 300)
  })

})

$(window).on('resize', () => {
  // $('.textbook-list').height(`${$(currentItem).find('.textbook-list')[0].scrollHeight}px`)
})


