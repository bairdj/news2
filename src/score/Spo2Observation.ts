import NumericObservation from '@/score/NumericObservation'

class Spo2Observation extends NumericObservation {
  _scale : number;
  _oxygen: boolean = false;

  constructor () {
    super('SpO2')
    this._scale = 1
  }

  private static scale1Score (spo2 : number) : number {
    if (spo2 >= 96) {
      return 0
    } else if (spo2 >= 94) {
      return 1
    } else if (spo2 >= 92) {
      return 2
    } else if (spo2 <= 91) {
      return 3
    }
    return 0
  }

  private scale2Score () : number {
    if (this.observation === undefined) {
      return 0
    }
    if (this._oxygen) {
      if (this.observation >= 97) {
        return 3
      } else if (this.observation >= 95) {
        return 2
      } else if (this.observation >= 93) {
        return 1
      }
    }
    if (this.observation >= 88) {
      return 0
    } else if (this.observation >= 86) {
      return 1
    } else if (this.observation >= 84) {
      return 2
    } else if (this.observation <= 83) {
      return 3
    }
    return 0
  }

  getScore (): number {
    if (this.observation === undefined) {
      return 0
    }
    let baseScore = this._oxygen ? 2 : 0
    if (this._scale === 1) {
      return baseScore + Spo2Observation.scale1Score(this.observation)
    } else if (this._scale === 2) {
      return baseScore + this.scale2Score()
    }
    return 0
  }

  set scale (scale : number) {
    this._scale = scale
  }

  get scale () {
    return this._scale
  }

  set oxygen (oxygen : boolean) {
    this._oxygen = oxygen
  }

  get oxygen () {
    return this._oxygen
  }
}

export default Spo2Observation
