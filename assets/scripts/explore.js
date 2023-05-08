// explore.js

window.addEventListener('DOMContentLoaded', init);

function setSpeech() {
  return new Promise(
      function (resolve, reject) {
          let synth = window.speechSynthesis;
          let id;

          id = setInterval(() => {
              if (synth.getVoices().length !== 0) {
                  resolve(synth.getVoices());
                  clearInterval(id);
              }
          }, 10);
      }
  )
}

function load_voices(voices) {
  for (let i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = voices[i].name + ' (' + voices[i].lang + ')';
    voiceSelect.appendChild(option);
  }
}

var voiceSelect = document.getElementById("voice-select");
let s = setSpeech();

s.then((voices) => load_voices(voices));

function init() {
  // TODO
  var button = document.getElementsByTagName("button")[0];
  var voices = [];
  var synth = window.speechSynthesis;
  var textBox = document.getElementById("text-to-speak");
  var utterThis = new SpeechSynthesisUtterance(textBox.value);
  var img = document.getElementsByTagName("img")[0];

  setTimeout(() => {
    voices = synth.getVoices();
  }, 50);

  textBox.addEventListener("change", function() {
    utterThis = new SpeechSynthesisUtterance(textBox.value);
  });

  button.addEventListener("click", function() {
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    utterThis.voice = voices[voiceSelect.value];
    synth.speak(utterThis);
    
    utterThis.onstart = function() {
      img.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = function() {
      img.src = "assets/images/smiling.png";
    }
  });
}