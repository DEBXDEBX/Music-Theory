//Note class start
class Key {
  constructor(tonic, majorScale, sharps, flats) {
    this.tonic = tonic;
    this.majorScale = majorScale;
    this.numberOfSharps = sharps;
    this.numberOfFlats = flats;
    this.prevKey;
    this.nextKey;
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
