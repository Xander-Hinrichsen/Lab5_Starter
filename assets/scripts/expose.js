// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  var hornimg = document.getElementsByTagName("img")[0];
  var select = document.getElementById("horn-select");
  var audio = document.getElementsByTagName("audio")[0];
  var audiobutton = document.getElementsByTagName("button")[0];

  var slider = document.getElementById("volume");
  var volumeImg = document.getElementsByTagName("img")[1];

  select.addEventListener("change", function() {
    let value = select.value;
    hornimg.src = "assets/images/" + value + ".svg";
    audio.src = "assets/audio/" + value + ".mp3";
  });

  audiobutton.addEventListener("click", function() {
    console.log(audio.src);
    if (audio.volume > 0) {audio.play();}
    if (select.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  slider.addEventListener("change", function() {
    if (slider.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (slider.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (slider.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = slider.value / 100;
  })
}



