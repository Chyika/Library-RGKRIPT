const dropdownList = $('.container-textbook-list');

const listItems = dropdownList.find('.textbook-item');

listItems.each(function (key, currentItem) {
  let headerItem = $(this).find('.textbook-header');
  let childListItem = $(this).find('.textbook-item-child'); // Getting child elements

  headerItem.on('click', function () {
    console.log('123');
    // childListItem.toggle()



    childListItem.each(function(key) {
      setTimeout(() => { $(this).toggleClass('list--close'); }, 100*key)
    })
    $(currentItem).find('.textbook-list').height(`${$(currentItem).find('.textbook-list')[0].scrollHeight}px`)

    setTimeout(() => { $(currentItem).toggleClass('list--close'); }, childListItem.length * 300)

  })

})


