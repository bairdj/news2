import ObservationSet from './ObservationSet'
import HeartRate from './HeartRate'
import RespirationRate from './RespirationRate'
import Avpu from './Avpu'
import Temperature from '@/score/Temperature'
import BloodPressure from '@/score/BloodPressure'
import Spo2Observation from '@/score/Spo2Observation'

class News2 extends ObservationSet {
  constructor () {
    super()
    this.add(new RespirationRate())
    this.add(new Spo2Observation())
    this.add(new BloodPressure())
    this.add(new HeartRate())
    this.add(new Avpu())
    this.add(new Temperature())
  }
}

export default News2
