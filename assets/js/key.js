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
    this.diatonicChordArray = this.buildDiatonticChordArray();
    this.relativeMinorChordArray = this.buildRelativMinorArray();
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
  buildDiatonticChordArray() {
    let chordHtmlArray = [];

    let oneChord = `<div class="chordSection">
    <h5>&#8544;</h5>
    <h6>${this.majorScale[0]}</h6>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6>${this.majorScale[0]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[2]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[4]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(oneChord);

    let twoChord = `<div class="chordSection">
    <h5>&#8561;</h5>
    <h6>${this.majorScale[1]} min</h6>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6>${this.majorScale[1]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[3]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[5]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(twoChord);

    let threeChord = `<div class="chordSection">
    <h5>&#8562;</h5>
    <h6>${this.majorScale[2]} min</h6>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6>${this.majorScale[2]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[4]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[6]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(threeChord);

    let fourChord = `<div class="chordSection">
    <h5>&#8547;</h5>
    <h6>${this.majorScale[3]}</h6>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6>${this.majorScale[3]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[5]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[0]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(fourChord);

    let fiveChord = `<div class="chordSection">
    <h5>&#8548;</h5>
    <h6>${this.majorScale[4]}</h6>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6>${this.majorScale[4]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[6]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[1]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(fiveChord);

    let sixChord = `<div class="chordSection">
    <h5>&#8565;</h5>
    <h6>${this.majorScale[5]} min</h6>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6>${this.majorScale[5]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[0]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[2]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(sixChord);

    let sevenChord = `<div class="chordSection">
    <h5>&#8566;</h5>
    <h6>${this.majorScale[6]} dim</h6>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6>${this.majorScale[6]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[1]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6>${this.majorScale[3]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(sevenChord);

    return chordHtmlArray;
  } // End

  //Method
  getDiatonicChordsHtml() {
    let html = "";
    for (let chordHtml of this.diatonicChordArray) {
      html += chordHtml;
    }
    return `<div class="chordFlexWrapper">${html}</div>`;
  }

  //Method
  getNumberSharpsFlats() {
    if (this.numberOfSharps === 0 && this.numberOfFlats === 0) {
      return " ";
    }
    return this.numberOfSharps === 0
      ? `      ${this.numberOfFlats}&#9837;`
      : `      ${this.numberOfSharps}&sharp;`;
  }
  //Method
  buildRelativMinorArray() {
    let newArray = [];

    newArray.push(this.diatonicChordArray[5].replace("&#8565", "&#8560"));
    newArray.push(this.diatonicChordArray[6].replace("&#8566", "&#8561"));
    newArray.push(this.diatonicChordArray[0].replace("&#8544", "&#8546"));
    newArray.push(this.diatonicChordArray[1].replace("&#8561", "&#8563"));
    newArray.push(this.diatonicChordArray[2].replace("&#8562", "&#8564"));
    newArray.push(this.diatonicChordArray[3].replace("&#8547", "&#8549"));
    newArray.push(this.diatonicChordArray[4].replace("&#8548", "&#8550"));

    return newArray;
  } // End

  //Method
  getRelativeMinorChordsHtml() {
    let html = "";
    for (let chordHtml of this.relativeMinorChordArray) {
      html += chordHtml;
    }
    return `<div class="chordFlexWrapper">${html}</div>`;
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
    return `<div class="key"><div class="keySection"><h6>Notes in the Key of ${
      this.tonic
    }      ${this.getNumberSharpsFlats()}</h6><h6>${
      this.tonic
    } major scale</h6><div class="scale">${this.getMajorScaleHtml()}</div>
    <div class="chordFlexWrapper">${this.getDiatonicChordsHtml()}</div>
    </div>
    <div class="keySection">
  <h6>Note's in the Relitive minor Key ${this.getNumberSharpsFlats()}</h6><h6>${
      this.majorScale[5]
    } minor scale</h6><div class="scale">${this.getRelativeMinorScaleHtml()}</div>
    <div class="chordFlexWrapper">${this.getRelativeMinorChordsHtml()}</div></div></div>`;
  } // End
} // End Note class
