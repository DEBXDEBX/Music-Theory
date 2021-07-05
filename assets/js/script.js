"use strict";
let currentKey;
let direction;
// create elements object
const el = new Elements();
// Pass elements to display
const display = new Display(el);
// ♭        &#9837;   /  &flat;
// ♮        &#9838;   /  &natural;
// ♯        &#9839;   /  &sharp;
const tabAudio = document.querySelector("#tabAudio");
//The start of program exicution.
window.onload = function () {
  startUp();
};
//Start Up
function startUp() {
  currentKey = Key.buildCircularLinkedListOfKeys();
  display.paintKeyDiv(currentKey.getKeyHtml());
  display.paintChordProgressionDiv(currentKey.getChordProgressionsHtml());
}

el.prevKeyBtn.addEventListener("click", (e) => {
  tabAudio.play();
  direction = "left";
  currentKey = currentKey.prevKey;
  let html;
  let progressionHtml;
  if (!currentKey.enharmonicKey) {
    display.paintKeyDiv(currentKey.getKeyHtml());
    display.paintChordProgressionDiv(currentKey.getChordProgressionsHtml());
  } else {
    if (
      direction === "left" &&
      currentKey.enharmonicKey.tonic.includes("flat")
    ) {
      html = `${currentKey.enharmonicKey.getKeyHtml()}<h1>Enharmonic key</h1>${currentKey.getKeyHtml()}`;
      display.paintKeyDiv(html);
      progressionHtml = `${currentKey.enharmonicKey.getChordProgressionsHtml()}<h1 class="progressionH1">Enharmonic key Chord Progressions</h1>${currentKey.getChordProgressionsHtml()}`;
      display.paintChordProgressionDiv(progressionHtml);
    } else {
      html = `${currentKey.getKeyHtml()}<h1>Enharmonic key</h1>${currentKey.enharmonicKey.getKeyHtml()}`;
      display.paintKeyDiv(html);
      progressionHtml = `${currentKey.getChordProgressionsHtml()}<h1 class="progressionH1">Enharmonic key Chord Progressions</h1>${currentKey.enharmonicKey.getChordProgressionsHtml()}`;
      display.paintChordProgressionDiv(progressionHtml);
    }
  }
});

el.nextKeyBtn.addEventListener("click", (e) => {
  tabAudio.play();
  direction = "right";
  currentKey = currentKey.nextKey;
  let html;
  let progressionHtml;
  if (!currentKey.enharmonicKey) {
    display.paintKeyDiv(currentKey.getKeyHtml());
    display.paintChordProgressionDiv(currentKey.getChordProgressionsHtml());
  } else {
    if (
      direction === "right" &&
      currentKey.enharmonicKey.tonic.includes("sharp")
    ) {
      html = `${currentKey.enharmonicKey.getKeyHtml()}<h1>Enharmonic key</h1>${currentKey.getKeyHtml()}`;
      display.paintKeyDiv(html);
      progressionHtml = `${currentKey.enharmonicKey.getChordProgressionsHtml()}<h1 class="progressionH1">Enharmonic key Chord Progressions</h1>${currentKey.getChordProgressionsHtml()}`;
      display.paintChordProgressionDiv(progressionHtml);
    } else {
      html = `${currentKey.getKeyHtml()}<h1>Enharmonic key</h1>${currentKey.enharmonicKey.getKeyHtml()}`;
      progressionHtml = `${currentKey.getChordProgressionsHtml()}<h1 class="progressionH1">Enharmonic key Chord Progressions</h1>${currentKey.enharmonicKey.getChordProgressionsHtml()}`;
      display.paintKeyDiv(html);
      display.paintChordProgressionDiv(progressionHtml);
    }
  }
});
