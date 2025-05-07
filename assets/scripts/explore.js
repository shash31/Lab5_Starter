// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectvoice = document.getElementById("voice-select");
  const text = document.getElementById("text-to-speak");
  const faceimg = document.querySelector("img");
  const speak = document.querySelector("button");
  const texttospeech = window.speechSynthesis;
  const words = new SpeechSynthesisUtterance(text.value);
  words.onstart = () => {
    faceimg.src = "assets/images/smiling-open.png";
  }
  words.onend = () => {
    faceimg.src = "assets/images/smiling.png";
  }

  // add all available voices from SpeechSynthesizer to selectvoice dropdown
  const voices = texttospeech.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.value = voices[i].name;
    option.setAttribute("lang", voices[i].lang);
  
    selectvoice.appendChild(option);
  }

  speak.addEventListener("click", function() {
    // speak text.value
    words.text = text.value;
    if (selectvoice.value != "select") {
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectvoice.value) {
          if (selectvoice.selectedOptions[0].getAttribute("lang") == voices[i].lang) {
            words.voice = voices[i];
          }
        }
      }
      console.log(words.voice);
    }
    texttospeech.speak(words);
  });
}