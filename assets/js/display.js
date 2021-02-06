class Display {
  constructor(elements, $) {
    this.elements = elements;
    // JQuery
    this.$ = $;
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
  paintCircle(html) {
    this.elements.circle.innerHTML = html;
  } // End clearFileCabDisplay()
}
