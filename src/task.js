//prints tasks
export class Task {

  constructor(...sections) {

    for (let i = 0 ; i < sections.length ;  i++){
      console.log(sections[i]);
    }

  }
}

