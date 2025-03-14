// create a key/value array for inputed description

export class Notes {

  constructor(notes) {

    this.notes = notes;

  };

  get notes() {
    return this._notes;
  };

  set notes(value) {

    let newValue = ["notes", value]

    this._notes = newValue;
  }
  
} 