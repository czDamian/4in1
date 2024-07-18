const currCountElem = document.getElementById("choose");

let currCount = parseFloat(currCountElem.innerHTML);

function increase() {
  currCount++;
  currCountElem.innerHTML = currCount;
}
