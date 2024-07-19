// const currCountElem = document.getElementById("choose");
const startElem = document.getElementById("start");
const successElem = document.getElementById("success");
const failElem = document.getElementById("failure");
const outOfTriesElem = document.getElementById("outOfTries");
const playPassElem = document.getElementById("playPass");
const playBalElem = document.getElementById("playBal");

// let currCount = parseFloat(currCountElem.innerHTML);
let start = startElem.innerHTML;
let success = successElem.innerHTML;
let failure = failElem.innerHTML;
let outOfTries = outOfTriesElem.innerHTML;
let playBal = parseFloat(playBalElem.innerHTML);
let playPass = parseFloat(playPassElem.innerHTML);

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
    successElem.style.display = "none";
    failElem.style.display = "none";
  }
}
function updatePassAndBal() {
  playPassElem.innerHTML = playPass;
  playBalElem.innerHTML = playBal;
}

function checkAnswer() {
  const answerSpans = document.querySelectorAll("#answer span");
  const answer = Array.from(answerSpans)
    .map((span) => span.innerText)
    .join("");

  if (playPass > 0) {
    if (answer === "CAT") {
      successElem.style.display = "block";
      playPass -= 3;
      playBal += 6;
      updatePassAndBal();
      failElem.style.display = "none";
      resetAnswer();
    } else {
      failElem.style.display = "block";
      successElem.style.display = "none";
      resetAnswer();
    }
  } else {
    outOfTriesElem.style.display = "block";
    successElem.style.display = "none";
  }
}
function checkAnswer2() {
  const answerSpans = document.querySelectorAll("#answer span");
  const answer = Array.from(answerSpans)
    .map((span) => span.innerText)
    .join("");

  if (playPass > 0) {
    if (answer === "HOUSE") {
      playPass -= 3;
      playBal += 6;
      updatePassAndBal();
      successElem.style.display = "block";
      failElem.style.display = "none";
      resetAnswer();
    } else {
      failElem.style.display = "block";
      successElem.style.display = "none";
      resetAnswer();
    }
  } else {
    outOfTriesElem.style.display = "block";
    successElem.style.display = "none";
  }
}

function resetAnswer() {
  const answerSpans = document.querySelectorAll("#answer span");
  answerSpans.forEach((span) => (span.innerText = ""));
  currentIndex = 0;
}
