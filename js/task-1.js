var categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.childElementCount}`)

var items = document.querySelectorAll('.item');
console.log(items);

items.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`)
    console.log(`Elements: ${element.querySelector('ul').childElementCount}`)
});