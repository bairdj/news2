import Observation from './Observation'
import Selection from './Selection'

class SelectionObservation extends Observation {
  _options : Selection[]
  _selected : Selection

  constructor (label : string, options : Selection[], selection : Selection) {
    super(label)
    this._options = options
    this._selected = this._options[0]
  }

  add (selection : Selection) : void {
    this._options.push(selection)
  }

  getScore (): number {
    return this._selected.score
  }

  get selection () : Selection {
    return this._selected
  }

  set selection (selection : Selection) {
    this._selected = selection
  }

  get options () : Selection[] {
    return this._options
  }
}

export default SelectionObservation
