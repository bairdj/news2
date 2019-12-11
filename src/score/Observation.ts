abstract class Observation {
  label: string;

  protected constructor (label : string) {
    this.label = label
  }

  abstract getScore () : number;
}

export default Observation
