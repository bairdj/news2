import SelectionObservation from './SelectionObservation'
import Selection from './Selection'

class Avpu extends SelectionObservation {
  constructor () {
    const a = new Selection('A', 0)
    const c = new Selection('C', 3)
    const v = new Selection('V', 3)
    const p = new Selection('P', 3)
    const u = new Selection('U', 3)
    const options = [a, c, v, p, u]
    super('AVPU', options, a)
  }
}

export default Avpu
