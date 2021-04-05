// function timer2() {
//   setInterval(changeColor, 800);
// }

// function changeColor() {
//   const r = Math.trunc(Math.random() * 255);
//   const g = Math.trunc(Math.random() * 255);
//   const b = Math.trunc(Math.random() * 255);

//   div.style.backgroundColor = `rgb(${r},${g},${b})`;
// }

function timer() {
  setInterval(counter, 1000);
}

function counter() {
  i--;
  if (i === 1) attemptCount.innerHTML = `The game will be restart in 1 second.`;
  else if (i === 0) location.reload();
  else attemptCount.innerHTML = `The game will be restart in ${i} seconds.`;
}

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  if (inputNumber.value.length > 1) {
    inputNumber.value = 100;
    return false;
  }
  return true;
}

const div = document.querySelector("div");
const inputNumber = document.getElementById("number");
const guessButton = document.querySelector("#guess");
const infoMessage = document.querySelector("h2");
const attemptCount = document.querySelector("h5");
const ranNum = Math.floor(Math.random() * 101);

//guessButton.addEventListener("click", timer); opsiyonel
//guessButton.removeEventListener("click", changeColor); bakılacak.
guessButton.addEventListener("click", compare);
console.log(ranNum);

let i = 6;
let lastGuess = -1;
let lastSelected = -1;
let attemptCounter = 0;
infoMessage.innerHTML = "Please enter a Number Over There!";

function compare() {
  let userGuess = parseInt(inputNumber.value);

  if (inputNumber.value == "") {
    infoMessage.innerHTML = "Hey, I think you miss something ?";
  } else if (lastSelected == 1 && userGuess <= lastGuess && lastGuess >= 0) {
    infoMessage.innerHTML =
      "No no no! I said bigger <br> I don't count this one.";
    attemptCount.innerHTML = "Your Lucky Day";
  } else if (lastSelected == 0 && userGuess >= lastGuess) {
    infoMessage.innerHTML =
      "No no no! I said smaller <br> I don't count this one.";
    attemptCount.innerHTML = "Your Lucky Day";
  } else {
    lastGuess = userGuess;
    if (userGuess > ranNum) {
      infoMessage.innerHTML = "Please Guess again <br> But guess smaller now";
      attemptCounter += 1;
      inputNumber.value = "";
      attemptCount.innerHTML = "Attempts: " + attemptCounter;
      lastSelected = 0;
    } else if (userGuess < ranNum) {
      infoMessage.innerHTML =
        "Please Guess again <br> But guess bigger this time";
      attemptCounter += 1;
      inputNumber.value = "";
      attemptCount.innerHTML = "Attempts: " + attemptCounter;
      lastSelected = 1;
    } else if (userGuess == ranNum) {
      infoMessage.innerHTML = `Congrats! YOU WON in ${
        attemptCounter + 1
      } attempts.`;
      attemptCounter += 1;
      attemptCount.innerHTML = "Attempts: " + attemptCounter;
      guessButton.disabled = true;
      guessButton.textContent = "This Turn Finished";
      timer();
    }
  }
}