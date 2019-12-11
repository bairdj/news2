import NumericObservation from '@/score/NumericObservation'

class BloodPressure extends NumericObservation {
  constructor () {
    super('Systolic blood pressure')
  }

  getScore (): number {
    if (this.observation === undefined) {
      return 0
    }
    if (this.observation >= 220) {
      return 3
    } else if (this.observation >= 111) {
      return 0
    } else if (this.observation >= 101) {
      return 1
    } else if (this.observation >= 91) {
      return 2
    } else if (this.observation <= 90) {
      return 3
    }
    return 0
  }
}

export default BloodPressure
