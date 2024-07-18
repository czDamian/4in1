const currCountElem = document.getElementById("choose");

let currCount = parseFloat(currCountElem.innerHTML);

function increase() {
  currCount++;
  console.log(currCount);
  currCountElem.innerHTML = currCount;
}
