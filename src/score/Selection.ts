class Selection {
  _label : string;
  _score : number;

  constructor (label : string, score : number) {
    this._label = label
    this._score = score
  }

  get label () {
    return this._label
  }

  get score () {
    return this._score
  }
}

export default Selection
