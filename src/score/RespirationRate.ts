import NumericObservation from './NumericObservation'

class RespirationRate extends NumericObservation {
  constructor () {
    super('Respiration rate')
  }

  getScore (): number {
    if (this.observation === undefined) {
      return 0
    }
    if (this.observation >= 25) {
      return 3
    } else if (this.observation >= 21) {
      return 2
    } else if (this.observation >= 12) {
      return 0
    } else if (this.observation >= 9) {
      return 1
    } else if (this.observation <= 8) {
      return 3
    }
    return 0
  }
}

export default RespirationRate
