export class DueDate {

  constructor(dueDate) {

    this.dueDate = dueDate;

  };

  get dueDate() {
    return this._dueDate;
  };

  set dueDate(value) {

    this._dueDate = value;
  }

} 