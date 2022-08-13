/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let obj = {};
    for (let i = 0; i < this.words.length; i++) {
      if (!(obj[this.words[i]] in obj)) {
        if (this.words[i + 1] != null) {
          obj[this.words[i]] = [this.words[i + 1]];
        } else {
          obj[this.words[i]] = null;
        }
      } else {
        obj[this.words[i]].push(this.words[i + 1]);
      }
    }
    this.obj = obj;
  }

  /** return random text from chains */
  // {string; ['str', 'str']}
  makeText(numWords = 100) {
    // TODO
    let newSentance = [];
    for (let key in this.obj) {
      if (newSentance.length < numWords) {
        let rand = Math.floor(Math.random() * this.obj[key].length);
        newSentance.push(key, this.obj[key][rand]);
      } else {
        return newSentance.join(" ");
      }
    }
  }
}
module.exports = {
  MarkovMachine
};
