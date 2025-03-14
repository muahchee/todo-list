// create a key/value array for inputed description

export class Checklist {

  constructor(...checklist) {

    this.checklist = checklist;

  };

  get checklist() {
    return this._checklist;
  };

  set checklist(value) {

    let arr = {};

    //turn into an object, 
      //checklist(value) will be the key, each key will have an "unchecked" value
    
    for (let i = 0 ; i < value.length ; i++){

      arr[value[i]] = "unchecked";

    }

    console.log("checklist!")

    let newValue = ["checklist", arr]

    this._checklist = newValue;
  }
  
} 