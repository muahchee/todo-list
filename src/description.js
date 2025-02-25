export class Description {

  constructor(description) {

    this.description = description;

  };

  get description() {
    return this._description;
  };

  set description(value) {

    this._description = value;
  }

} 