//Note class start
class Key {
  constructor(majorScale, sharps, flats) {
    this.majorScale = majorScale;
    this.numberOfSharps = sharps;
    this.numberOfFlats = flats;
    this.prevKey;
    this.nextKey;
    this.enharmonicKey;
    this.setSharps();
    this.setFlats();
    this.tonic = this.majorScale[0];
  } // End constructor

  //Method
  setPrevKey(prevKey) {
    this.prevKey = prevKey;
  } // End

  //Method
  setNextKey(nextKey) {
    this.nextKey = nextKey;
  } // End

  //Method
  setSharps() {
    // ♭        &#9837;   /  &flat;
    // ♮        &#9838;   /  &natural;
    // ♯        &#9839;   /  &sharp;
    let newArray = [];
    for (let note of this.majorScale) {
      note = note.replace("#", "&sharp;");
      newArray.push(note);
      this.majorScale = newArray;
    }
  } // End

  //Method
  setFlats() {
    let newArray = [];
    for (let note of this.majorScale) {
      console.log(note);
      note = note.replace("b", "&flat;");
      newArray.push(note);
      this.majorScale = newArray;
    }
  } // End

  //Method
  setEnharmonicKey(enharmonicKey) {
    this.enharmonicKey = enharmonicKey;
  } // End

  //Method
  getHtml() {
    let html = "";
    let stringOfNotes = "";
    for (let note of this.majorScale) {
      // stringOfNotes += `${this.majorScale[noteIndex]} `;
      stringOfNotes += `${note} `;
    }
    return `<div><h6>Notes in the Key of ${this.tonic}</h6><h1>${stringOfNotes}</h1></div>`;

    // return `<H1>${stringOfNotes}</H1> ${
    //   this.enharmonicKey ? this.enharmonicKey.getHtml() : ""
    // }`;
  } // End

  //Method
  logValues() {
    console.log("################################");
    console.log(`Tonic: ${this.tonic}`);
    console.log(`sharps: ${this.numberOfSharps}`);
    console.log(`flats: ${this.numberOfFlats}`);
    console.log(this.majorScale);
    console.log(this.prevKey);
    console.log(this.nextKey);
    console.log("################################");
  } // End
} // End Note class
