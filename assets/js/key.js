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
    this.relativeMinorChordArray = this.buildRelativeMinorArray();
  } // End constructor

  static buildCircularLinkedListOfKeys() {
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

    // Set next and prev keys, this is a linked list
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

    return C;
  }
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
    }
    this.majorScale = newArray;
  } // End

  //Method
  setFlats() {
    let newArray = [];
    for (let note of this.majorScale) {
      note = note.replace("b", "&flat;");
      newArray.push(note);
    }
    this.majorScale = newArray;
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
  <h2>${this.majorScale[0]}</h2>
  <div class="chordNoteDiv">
  <div class="noteChordInnerDiv">
    <h6 class="chordNote">${this.majorScale[0]}</h6>
    </div>
    <div class="noteChordInnerDiv">
    <h6 class="chordNote">${this.majorScale[2]}</h6>
    </div>
    <div class="noteChordInnerDiv">
    <h6 class="chordNote">${this.majorScale[4]}</h6>
    </div>
  </div>
</div>`;
    chordHtmlArray.push(oneChord);

    let twoChord = `<div class="chordSection">
    <h5>&#8561;</h5>
    <h2>${this.majorScale[1]} min</h2>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[1]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[3]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[5]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(twoChord);

    let threeChord = `<div class="chordSection">
    <h5>&#8562;</h5>
    <h2>${this.majorScale[2]} min</h2>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[2]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[4]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[6]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(threeChord);

    let fourChord = `<div class="chordSection">
    <h5>&#8547;</h5>
    <h2>${this.majorScale[3]}</h2>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[3]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[5]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[0]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(fourChord);

    let fiveChord = `<div class="chordSection">
    <h5>&#8548;</h5>
    <h2>${this.majorScale[4]}</h2>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[4]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[6]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[1]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(fiveChord);

    let sixChord = `<div class="chordSection">
    <h5>&#8565;</h5>
    <h2>${this.majorScale[5]} min</h2>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[5]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[0]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[2]}</h6>
      </div>
    </div>
  </div>`;
    chordHtmlArray.push(sixChord);

    let sevenChord = `<div class="chordSection">
    <h5>&#8566;</h5>
    <h2>${this.majorScale[6]} &#176;</h2>
    <div class="chordNoteDiv">
    <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[6]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[1]}</h6>
      </div>
      <div class="noteChordInnerDiv">
      <h6 class="chordNote">${this.majorScale[3]}</h6>
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
      return "-";
    }

    if (this.numberOfSharps === 0) {
      if (this.numberOfFlats === 1) {
        return `      ${this.numberOfFlats}&#9837;`;
      } else {
        return `  ${this.numberOfFlats}&#9837;'s`;
      }
    } else {
      if (this.numberOfSharps === 1) {
        return `      ${this.numberOfSharps}&sharp;`;
      } else {
        return `      ${this.numberOfSharps}&sharp;'s`;
      }
    }
  }
  //Method
  buildRelativeMinorArray() {
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
  getKeyHtml() {
    return `<div class="key"><div class="keySection"><h6 class="heading">Notes in the Key of ${
      this.tonic
    }<h6 class="heading">${this.getNumberSharpsFlats()}</h6</h6><h6 class="heading">${
      this.tonic
    } major scale</h6><div class="scale">${this.getMajorScaleHtml()}</div>
    <h6 class="heading">Chords in the Key of ${this.tonic}</h6>
      ${this.getDiatonicChordsHtml()}
      </div>
      <div class="keySection">
    <h6 class="heading">Note's in the Relitive minor Key <h6 class="heading">${this.getNumberSharpsFlats()}</h6></h6><h6 class="heading">${
      this.majorScale[5]
    } minor scale</h6><div class="scale">${this.getRelativeMinorScaleHtml()}</div>
    <h6 class="heading">Chords in the Key of ${this.majorScale[5]} minor</h6>
      ${this.getRelativeMinorChordsHtml()}</div></div>`;
  } // End

  // Code for Progressions *******************************************************

  //Method
  wrapChordDuration(barLength, chordHtml) {
    return `<div class="wrapChordDuration">
   <div>${chordHtml}</div>
   <div class="numOfTimes">${barLength}</div>
    </div>`;
  } // End

  //Method
  getChordProgressionsHtml() {
    return `<div class="progressions">
    <div class="progressionsSection">
    <h6 class="heading">Chord Progression's in the Key of ${this.tonic}</h6>
    ${this.get1645()}
    ${this.get1465()} 
    ${this.get1564()}
    ${this.get6415()}
    ${this.get145()}
    ${this.get12BarBlues()}
    ${this.getCanon()}
   </div></div>`;
  } // End

  //Method
  get12BarBlues() {
    return `<div><h6 class="heading">12 Bar Blues</h6>
    <div class="chordFlexWrapperTwo"><div class="chordSection">
    ${this.wrapChordDuration("4 Bars", this.diatonicChordArray[0])}
    </div>
    <div class="chordSection">
    ${this.wrapChordDuration("2 Bars", this.diatonicChordArray[3])}
    </div>
    <div class="chordSection">
    ${this.wrapChordDuration("2 Bars", this.diatonicChordArray[0])}
    </div>
    <div class="chordSection">
    ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
    </div>
    <div class="chordSection">
    ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[3])}
    </div>
    <div class="chordSection">
    ${this.wrapChordDuration("2 Bars", this.diatonicChordArray[0])}
    </div>
    </div></div>`;
  } // End

  //Method
  get145() {
    return `<div><h6 class="heading">One Four Five</h6>
          <div class="chordFlexWrapperTwo"><div class="chordSection">
          ${this.wrapChordDuration("1/2 Bar", this.diatonicChordArray[0])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1/2 Bar", this.diatonicChordArray[3])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
          </div>
          </div></div>`;
  } // End

  //Method
  get1465() {
    return `<div><h6 class="heading">One Four Six Five</h6>
        <div class="chordFlexWrapperTwo"><div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[0])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[3])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[5])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
        </div>
        </div></div>`;
  } // End

  //Method
  get1564() {
    return `<div><h6 class="heading">One Five Six Four</h6>
      <div class="chordFlexWrapperTwo"><div class="chordSection">
      ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[0])}
      </div>
      <div class="chordSection">
      ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
      </div>
      <div class="chordSection">
      ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[5])}
      </div>
      <div class="chordSection">
      ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[3])}
      </div>    
      </div></div>`;
  } // End

  //Method
  get1645() {
    return `<div><h6 class="heading">One Six Four Five</h6>
        <div class="chordFlexWrapperTwo"><div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[0])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[5])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[3])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
        </div>
        </div></div>`;
  } // End

  //Method
  get6415() {
    return `<div><h6 class="heading">Six Four One Five</h6>
        <div class="chordFlexWrapperTwo"><div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[5])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[3])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[0])}
        </div>
        <div class="chordSection">
        ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
        </div>
        </div></div>`;
  } // End

  //Method
  getCanon() {
    return `<div><h6 class="heading">Canon</h6>
          <div class="chordFlexWrapperTwo">
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[0])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[5])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[2])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[3])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[0])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[3])}
          </div>
          <div class="chordSection">
          ${this.wrapChordDuration("1 Bar", this.diatonicChordArray[4])}
          </div>
          </div></div>`;
  } // End
}
