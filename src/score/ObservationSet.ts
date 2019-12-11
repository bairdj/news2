import Observation from '@/score/Observation'

class ObservationSet {
  _observations: Observation[] = [];

  add (observation : Observation) : void {
    this._observations.push(observation)
  }

  get observations () : Observation[] {
    return this._observations
  }

  getTotalScore () : number {
    let total = 0
    this._observations.forEach((o) => {
      total += o.getScore()
    })
    return total
  }
}

export default ObservationSet
