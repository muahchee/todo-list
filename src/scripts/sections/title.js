// create a key/value array for inputed title

export class Title {

  constructor(title) {

    this.title = title;

  };

  //return statement
  get title() {


    return this._title;
  };

  set title(value) {

    let titleDOM = document.createElement("h2");
    titleDOM.textContent = this.title

    this._title = titleDOM;
  }

} 