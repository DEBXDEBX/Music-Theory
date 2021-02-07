"use strict";
let currentKey;
// create elements object
const el = new Elements();
// Pass elements to display
const display = new Display(el, $);
// ♭        &#9837;   /  &flat;
// ♮        &#9838;   /  &natural;
// ♯        &#9839;   /  &sharp;

//The start of program exicution.
window.onload = function () {
  startUp();
};
//Start Up
function startUp() {
  currentKey = createKeys();
  console.log(currentKey);
  display.paintKeyDiv(currentKey.getHtml());
  // "<h1>A<span>&sharp;</span> B<span>&flat;</span> C D E F G </h1>"
}

function createKeys() {
  let C = new Key(["C", "D", "E", "F", "G", "A", "B"], 0, 0);
  let G = new Key(["G", "A", "B", "C", "D", "E", "F#"], 1, 0);
  let D = new Key(["D", "E", "F#", "G", "A", "B", "C#"], 2, 0);
  let A = new Key(["A", "B", "C#", "D", "E", "F#", "G#"], 3, 0);
  let EFflat = new Key(["E", "F#", "G#", "A", "B", "C#", "D#"], 4, 0);
  let BCflat = new Key(["B", "C#", "D#", "E", "F#", "G#", "A#"], 5, 0);
  let FsharpGflat = new Key(["F#", "G#", "A#", "B", "C#", "D#", "E#"], 6, 0);
  //cutoff point
  let CsharpDflat = new Key(["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"], 0, 5);
  let AflatGsharp = new Key(["Ab", "Bb", "C", "Db", "Eb", "F", "G"], 0, 4);
  let Eflat = new Key(["Eb", "F", "G", "Ab", "Bb", "C", "D"], 0, 3);
  let Bflat = new Key(["Bb", "C", "D", "Eb", "F", "G", "A"], 0, 2);
  let F = new Key(["F", "G", "A", "Bb", "C", "D", "E"], 0, 1);

  // Set next and prev keys
  C.setPrevKey(F);
  C.setNextKey(G);

  G.setPrevKey(C);
  G.setNextKey(D);

  D.setPrevKey(G);
  D.setNextKey(A);

  A.setPrevKey(D);
  A.setNextKey(EFflat);

  EFflat.setPrevKey(A);
  EFflat.setNextKey(BCflat);

  BCflat.setPrevKey(EFflat);
  BCflat.setNextKey(FsharpGflat);

  FsharpGflat.setPrevKey(BCflat);
  FsharpGflat.setNextKey(CsharpDflat);

  CsharpDflat.setPrevKey(FsharpGflat);
  CsharpDflat.setNextKey(AflatGsharp);

  AflatGsharp.setPrevKey(CsharpDflat);
  AflatGsharp.setNextKey(Eflat);

  Eflat.setPrevKey(AflatGsharp);
  Eflat.setNextKey(Bflat);

  Bflat.setPrevKey(Eflat);
  Bflat.setNextKey(F);

  F.setPrevKey(Bflat);
  F.setNextKey(C);

  // create enharmonic Keys and set them to correct keys
  let CsharpDflatEnharmonic = new Key(
    ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    7,
    0
  );
  CsharpDflat.setEnharmonicKey(CsharpDflatEnharmonic);

  let FsharpGflatEnharmonic = new Key(
    ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
    0,
    6
  );
  FsharpGflat.setEnharmonicKey(FsharpGflatEnharmonic);

  let BCflatEnharmonic = new Key(
    ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
    0,
    7
  );
  BCflat.setEnharmonicKey(BCflatEnharmonic);
  // ################# TEST
  A.logValues();
  return C;
}

el.prevKeyBtn.addEventListener("click", (e) => {
  currentKey = currentKey.prevKey;
  display.paintKeyDiv(currentKey.getHtml());
});
el.nextKeyBtn.addEventListener("click", (e) => {
  currentKey = currentKey.nextKey;
  display.paintKeyDiv(currentKey.getHtml());
});
