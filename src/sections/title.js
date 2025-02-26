// create a key/value array for inputed title

export class Title {

  constructor(title) {

    this.title = title;

  };

  //return statement
  get title() {
    return this._title;
  };

  // format given value into key/value array([title, "inputed value"] )
  set title(value) {

    let newValue = ["title", value];

    // value has to 

    this._title = newValue;
  }

} 