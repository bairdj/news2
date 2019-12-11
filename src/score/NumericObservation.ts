import Observation from './Observation'

abstract class NumericObservation extends Observation {
  observation: number|undefined;
}

export default NumericObservation
