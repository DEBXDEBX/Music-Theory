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
  getMajorScaleHtml() {
    let stringOfNotes = "";
    for (let note of this.majorScale) {
      stringOfNotes += `<div class="noteDiv"><h4 class="note">${note}</h4></div>`;
    }
    return stringOfNotes;
  } // End
  //Method
  getRelativeMinorScaleHtml() {
    // make relative minor scale array
    let relativeMinorScale = [];
    relativeMinorScale.push(this.majorScale[5]);
    relativeMinorScale.push(this.majorScale[6]);
    relativeMinorScale.push(this.majorScale[0]);
    relativeMinorScale.push(this.majorScale[1]);
    relativeMinorScale.push(this.majorScale[2]);
    relativeMinorScale.push(this.majorScale[3]);
    relativeMinorScale.push(this.majorScale[4]);

    let stringOfNotes = "";
    for (let note of relativeMinorScale) {
      stringOfNotes += `<div class="noteDiv"><h4 class="note">${note}</h4></div>`;
    }
    return stringOfNotes;
  } // End
  //Method
  getHtml() {
    return `<div class="key"><h6>Notes in the Key of ${this.tonic}</h6><h6>${
      this.tonic
    } major scale</h6><div class="scale">${this.getMajorScaleHtml()}</div>
    <h6>${this.majorScale[5]} Relitive minor</h6><h6>${
      this.majorScale[5]
    } minor scale</h6><div class="scale">${this.getRelativeMinorScaleHtml()}</div></div>`;
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
