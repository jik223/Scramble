
// elements
const textEl = document.getElementById("text1");
const inputEl = document.getElementById("input0");
const msgEl = document.getElementById("msg-box");

let words = [
  "christmas",
  "sunshine",
  "holiday",
  "breakfast",
  'word', 
  'reptile',
  'animal',
  'super',
  'ton',
  'unibrow',
  'bike',
  'blanket',
  'giving',
  'hello',
  'laugh',
  'funny',
  'fun',
  'mystery'
];
let word;
let mixed;

//instantiate the sound
const audio = new Audio();
function tone(sound) {
  audio.src = sound;
  audio.load();
  audio.play();
}

function randomWord(array) {
  let num = Math.floor(Math.random() * array.length);
  return array[num];
}

function scramble(word) {
  word = word.split("");
  

  word = word.sort((char) => Math.random() - 0.5);
  return word.join("");
}
function newWord() {
    word = randomWord(words);
    mixed = scramble(word);
  
    textEl.textContent = mixed;
    inputEl.value = "";
  }
  
  newWord();
  
  function playGame() {
    if (inputEl.value === word) {
      msgEl.textContent = "Correct answer !";
      message("Correct answer", "#c2f3c2", "#178b17");
      tone("/correct.wav");
      removeMsg();
      newWord();
      return;
    }
  
    message("Incorrect answer, try again !", "#f5e2e2", "#ee3636");
    tone("/incorrect.wav");
    removeMsg();
  }
  
  function message(text, color, bColor) {
    msgEl.textContent = text;
    msgEl.style.top = "0";
    msgEl.style.backgroundColor = bColor;
    msgEl.style.color = color;
  }
  
  function removeMsg() {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      msgEl.textContent = "";
      msgEl.style.top = "-100%";
      msgEl.style.color = "#fff";
      msgEl.backgroundColor = "transparent";
    }, 3000);
  }