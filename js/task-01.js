const li = document.querySelectorAll(".item");
console.log(`Number of categories: ${li.length}`);
li.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
