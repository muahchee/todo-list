// create a key/value array for inputed dueDate

export class DueDate {

  constructor(dueDate) {

    this.dueDate = dueDate;

  };

  get dueDate() {
    return this._dueDate;
  };

  set dueDate(value) {

    let newValue = ["dueDate", value]

    this._dueDate = newValue;
  }

} 