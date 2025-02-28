// create a key/value array for inputed dueDate

import { formatDistance } from "date-fns";

export class DueDate {

  constructor(dueDate) {

    this.dueDate = dueDate;

  };


  get dueDate() {
    return this._dueDate;
  };

  set dueDate(value) {

    //shows how long until due date
    this._duration = formatDistance(value, new Date(), {
      addSuffix: true
    })

    let newValue = ["dueDate", `${value} (${this._duration})`]

    this._dueDate = newValue;
  }

} 