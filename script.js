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
  if (currentIndex == answerSpans.length) {
    const qId = answerSpans[0].closest(".flexC").id;
    checkAnswer(qId);
  }
}

function delLetter() {
  const answerSpans = document.querySelectorAll("#answer span");
  if (currentIndex > 0) {
    currentIndex--;
    answerSpans[currentIndex].innerText = "";
    successElem.style.display = "none";
    failElem.style.display = "none";
  }
}
function resetAnswer() {
  const answerSpans = document.querySelectorAll("#answer span");
  answerSpans.forEach((span) => (span.innerText = ""));
  currentIndex = 0;
}
function updatePassAndBal() {
  playPassElem.innerHTML = playPass;
  playBalElem.innerHTML = playBal;
}
// hardcoded the answers here. How it works is that each question has a unique html id. the id corresponds to an answers object in the script file. so on submit, the function uses the html question id and matches it to the script question id and then checks if the answers are the same
const answers = {
  q1: "CAT",
  q2: "HOUSE",
};
function checkAnswer(qId) {
  const answerSpans = document.querySelectorAll("#answer span");
  const answer = Array.from(answerSpans)
    .map((span) => span.innerText)
    .join("");
  const correctAns = answers[qId];
  console.log("you chose " + answer);

  if (playPass > 0) {
    if (answer === correctAns) {
      successElem.style.display = "block";
      playPass -= 3;
      playBal += 6;
      updatePassAndBal();
      failElem.style.display = "none";
    } else {
      failElem.style.display = "block";
      successElem.style.display = "none";
    }
  } else {
    outOfTriesElem.style.display = "block";
    successElem.style.display = "none";
  }
}
