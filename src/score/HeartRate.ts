import NumericObservation from './NumericObservation'

class HeartRate extends NumericObservation {
  constructor () {
    super('Heart rate')
  }

  getScore (): number {
    if (this.observation === undefined) {
      return 0
    }
    if (this.observation >= 131) {
      return 3
    } else if (this.observation >= 111) {
      return 2
    } else if (this.observation >= 91) {
      return 1
    } else if (this.observation >= 51) {
      return 0
    } else if (this.observation >= 41) {
      return 1
    } else if (this.observation <= 40) {
      return 3
    }
    return 0
  }
}

export default HeartRate
