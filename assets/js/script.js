"use strict";
//The start of program exicution.
window.onload = function () {
  startUp();
};
//Start Up
function startUp() {
  createKeys();
}

// ♭        &#9837;   /  &flat;
// ♮        &#9838;   /  &natural;
// ♯        &#9839;   /  &sharp;

function createKeys() {
  let C = new Key("C", ["C", "D", "E", "F", "G", "A", "B"], 0, 0);
  let G = new Key("G", ["G", "A", "B", "C", "D", "E", "F#"], 1, 0);
  let D = new Key("D", ["D", "E", "F#", "G", "A", "B", "C#"], 2, 0);
  let A = new Key("A", ["A", "B", "C#", "D", "E", "F#", "G#"], 3, 0);
  let EFflat = new Key("E/Fb", ["E", "F#", "G#", "A", "B", "C#", "D#"], 4, 0);
  let BCflat = new Key("B/Cb", ["B", "C#", "D#", "E", "F#", "G#", "A#"], 5, 7);
  let FsharpGflat = new Key(
    "F#/Gb",
    ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    6,
    6
  );
  let CsharpDflat = new Key(
    "C#/Db",
    ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    7,
    5
  );
  let AflatGsharp = new Key(
    "Ab/G#",
    ["G", "A", "B", "C", "D", "E", "F#"],
    0,
    4
  );
  let Eflat = new Key("Eb", ["Eb", "F", "G", "Ab", "Bb", "C", "D"], 0, 3);
  let Bflat = new Key("Bb", ["Bb", "C", "D", "Eb", "F", "G", "A"], 0, 2);
  let F = new Key("F", ["F", "G", "A", "Bb", "C", "D", "E"], 0, 1);

  C.setPrevKey(F);
  C.setNextKey(G);

  G.setPrevKey(C);
  G.setNextKey(D);

  D.setPrevKey(G);
  D.setNextKey(A);

  A.setPrevKey(D);
  A.setNextKey(Eflat);

  EFflat.setPrevKey(A);
  EFflat.setNextKey(BCflat);

  BCflat.setPrevKey(EFflat);
  BCflat.setNextKey(FsharpGflat);

  FsharpGflat.setPrevKey(BCflat);
  FsharpGflat.setNextKey(CsharpDflat);

  CsharpDflat.setPrevKey(FsharpGflat);
  CsharpDflat.setNextKey(AflatGsharp);

  AflatGsharp.setPrevKey(CsharpDflat);
  AflatGsharp.setNextKey(EFflat);

  Eflat.setPrevKey(AflatGsharp);
  Eflat.setNextKey(Bflat);

  Bflat.setPrevKey(Eflat);
  Bflat.setNextKey(F);

  F.setPrevKey(Bflat);
  F.setNextKey(C);
  // ################# TEST
  A.logValues();
}
