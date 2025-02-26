// create a key/value array for inputed description

export class Description {

  constructor(description) {

    this.description = description;

  };

  get description() {
    return this._description;
  };

  set description(value) {

    let newValue = ["description", value]

    this._description = newValue;
  }
  
} 