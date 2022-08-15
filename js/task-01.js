const allItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItemsEl.length}`);

allItemsEl.forEach(item =>
  console.log('Category:', item.firstElementChild.textContent)
);
allItemsEl.forEach(item =>
  console.log(
    'Elements:',
    item.firstElementChild.nextElementSibling.children.length
  )
);

// const categories = document.querySelector('#categories').children;

// for (let i = 0; i < categories.length; i += 1) {
//   const category = categories[i];
//   const subCategoryName = category.querySelector('h2').textContent;
//   const subCategoryCount = category.querySelectorAll('li').length;
//   console.log(`Category: ${subCategoryName}`);
//   console.log(`Elements: ${subCategoryCount}`);
// }

// const categories = [].slice.call(
//   document.querySelector('#categories').children
// );

// const toCategoryInfo = category => {
//   return {
//     categoryName: category.querySelector('h2').textContent,
//     subCategories: category.querySelectorAll('li').length,
//   };
// };

// const categoryInfoToString = (categoriesString, categoryInfo) => {
//   return (
//     categoriesString +
//     `\n Category: ${categoryInfo.categoryName} \n Elements: ${categoryInfo.subCategories}`
//   );
// };

// console.log(categories.map(toCategoryInfo).reduce(categoryInfoToString, ''));
