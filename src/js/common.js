import "jquery"

import "./compontnts/header"
import "./compontnts/dropdown_list"
import "./compontnts/forms"

/*
Вход: [2,7,4,1,8,1]
Выход: 1
*/

// const maximumTwo = (arr) => {
//   let max1 = arr[0];
//   let max2 = arr[1];
//   let max1I = 0;
//   let max2I = 1;
//   for(let i = 2; i < arr.length; i++) {
//     if (arr[i] > max1) {
//       if (max1 > max2) {
//         max2 = arr[i];
//         max2I = i;
//       } else {
//         max1 = arr[i];
//         max1I = i;
//       }
//     } else if (arr[i] > max2) {
//       max2 = arr[i];
//       max2I = i;
//     }
//   }
//
//   if (max1 > max2) return [max2, max1, max2I, max1I];
//   return [max1, max2, max1I, max2I];
// };
//
// function findLatestWeight(weights) {
//   let i = weights.length - 1;
//   do {
//     if (i === 0) return weights[0];
//     weights.sort((a, b) => a - b);
//     weights[i - 1] = weights[i] - weights[i-1];
//     weights.length = i;
//     i--;
//   } while (true)
// }
//
// module.exports = findLatestWeight;
//
// console.log(findLatestWeight([2,7,4,1,8,1]));
//
// function f(str) {
//   let res = str.match(/(class=".*"\s)/)
//   return res
// }
//
// function f2(str) {
//   let [, mod, elem ] = str.match(/[a-z]+(?:([^a-z]+)[a-z]+(?:\1)?[a-z]+)([^a-z]+)[a-z]+(?:\2)?[a-z]+/);
//   const substringCount = (source, substr) => (source.match(new RegExp('[a-z]' + substr + '[a-z]', 'g')) || []).length;
//
//   if (substringCount(str, elem) === 2 && substringCount(str, mod) === 1) {
//     [mod, elem] = [elem, mod];
//   }
//
//   return { mod, elem };
// }
//
// console.log(f2('.list-dropdown {width: 100%;display: flex;flex-direction: column;align-items: center;}.list-dropdown__item {max-width: 920px;width: 100%;transition: all 1s ease;&:not(:first-child) {margin-top: 15px;}}.list-dropdown__item--open {.item-list-dropdown__header {border-left: 6px solid $blue-color;padding-left: 19px;&:after {transform: rotate(-180deg);}}.item-list-dropdown__list {display: block;}}.item-list-dropdown {}.item-list-dropdown__header {cursor: pointer;display: flex;position: relative;align-items: center;border-left: 0 solid $blue-color;background-color: $white-color;box-shadow: 0px 1px 6px #E5E5E5;min-height: 55px;padding: 20px 65px 20px 25px;color: $paragraph-color;transition: all .1s ease;.textbook-arrow {transition: all 0.5s ease;margin-left: auto;}&:after {transition: all 0.5s ease;content: "";width: 0;height: 0;border-top: 6px solid $black-color;border-left: 6px solid transparent;border-right: 6px solid transparent;position: absolute;right: 30px;}}.item-list-dropdown__list {overflow: hidden;height: 0;transition: all 1s ease;}'));
