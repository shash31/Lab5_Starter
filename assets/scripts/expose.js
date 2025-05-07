// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornimg = document.querySelector("#expose img");
  const audiofile = document.getElementsByClassName("hidden")[0];
  const selecthorn = document.getElementById("horn-select");

  selecthorn.addEventListener("change", function() {
    // update and load image
    hornimg.src = "assets/images/" + selecthorn.value + ".svg";

    // update and set audio file
    audiofile.src = "assets/audio/" + selecthorn.value + ".mp3";
  });
  
  const volslider = document.getElementById("volume");
  const volimg = document.querySelector("#volume-controls img");

  volslider.addEventListener("input", function() {
    if (volslider.value == 0) {
      volimg.src = "assets/icons/volume-level-0.svg";
    } else if (volslider.value < 33) {
      volimg.src = "assets/icons/volume-level-1.svg";
    } else if (volslider.value < 67) {
      volimg.src = "assets/icons/volume-level-2.svg"; 
    } else {
      volimg.src = "assets/icons/volume-level-3.svg";
    }

    audiofile.volume = volslider.value / 100;
    console.log(audiofile.volume);
  });

  const playaudio = document.querySelector("button");
  const confetti = new JSConfetti();

  playaudio.addEventListener("click", function() {
    audiofile.play();
    
    if (selecthorn.value == "party-horn") {
      confetti.addConfetti();
    }
  });
}