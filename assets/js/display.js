class Display {
  constructor(elements) {
    this.elements = elements;
    // JQuery
    // this.$ = $;
  } // End constructor

  //Method
  displayNone(element) {
    this.$(element).slideUp("slow");
  } // End displayNone(element)

  //Method
  displayBlock(element) {
    this.$(element).slideDown("slow");
  } // End displayBlock(element)

  //Method
  clearCircle() {
    this.elements.circle.innerHTML = "";
  } // End clearFileCabDisplay()

  //Method
  paintKeyDiv(html) {
    this.elements.keyDiv.innerHTML = html;
  } // End clearFileCabDisplay()
}
