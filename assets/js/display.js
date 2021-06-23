class Display {
  constructor(elements) {
    this.elements = elements;
  } // End constructor

  //Method
  paintKeyDiv(html) {
    this.elements.keyDiv.innerHTML = html;
  } // End clearFileCabDisplay()

  //Method
  paintChordProgressionDiv(html) {
    console.log("called");
    this.elements.chordProgressionDiv.innerHTML = html;
  } // End paintchordProgressionDiv()
}
