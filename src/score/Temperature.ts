import NumericObservation from '@/score/NumericObservation'

class Temperature extends NumericObservation {
  constructor () {
    super('Temperature (°C)')
  }

  getScore (): number {
    if (this.observation === undefined) {
      return 0
    }
    if (this.observation >= 39.1) {
      return 2
    } else if (this.observation >= 38.1) {
      return 1
    } else if (this.observation >= 36.1) {
      return 0
    } else if (this.observation >= 35.1) {
      return 1
    } else if (this.observation <= 35) {
      return 3
    }
    return 0
  }
}

export default Temperature
