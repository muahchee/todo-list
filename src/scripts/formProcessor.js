
//outputs and object with key/value pairs, ignore any fields that are empty

export class FormProcessor {

  constructor(formData) {

    this.formData = formData

  }

  processForm() {

    let formObject = {}

    for( let [name, value] of this.formData){

      if (value !== ""){
        formObject[name] = value
      }  
    }

    return formObject
  }

}
