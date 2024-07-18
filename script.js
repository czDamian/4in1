// const currCountElem = document.getElementById("choose");
const startElem = document.getElementById("start");
const successElem = document.getElementById("success");
const failElem = document.getElementById("failure");

// let currCount = parseFloat(currCountElem.innerHTML);
let start = startElem.innerHTML;
let success = successElem.innerHTML;
let failure = failElem.innerHTML;

function increase() {
  currCount++;
  console.log(currCount);
  //   currCountElem.innerHTML = currCount;
}

// its working 🤣
function startFunc() {
  startElem.className = "block";
}

//copied
let currentIndex = 0;

function addLetter(letter) {
  const answerSpans = document.querySelectorAll("#answer span");
  if (currentIndex < answerSpans.length) {
    answerSpans[currentIndex].innerText = letter;
    currentIndex++;
  }
}

function checkAnswer() {
  const answerSpans = document.querySelectorAll("#answer span");
  const answer = Array.from(answerSpans)
    .map((span) => span.innerText)
    .join("");
  if (answer === "CAT") {
    successElem.style.display = "block";
    failElem.style.display = "none";
  } else {
    failElem.style.display = "block";
    successElem.style.display = "none";
    resetAnswer();
  }
}

function resetAnswer() {
  const answerSpans = document.querySelectorAll("#answer span");
  answerSpans.forEach((span) => (span.innerText = ""));
  currentIndex = 0;
}
