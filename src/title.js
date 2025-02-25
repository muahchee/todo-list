export class Title {

  constructor(title) {

    this.title = title;

  };

  get title() {
    return this._title;
  };

  set title(value) {
    //capitalises imputed title
    value = value.toUpperCase();

    this._title = value;
  }

} 