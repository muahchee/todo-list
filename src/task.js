//prints tasks
export class Task {

  constructor(...args) {

    for (let i = 0 ; i < args.length ;  i++){
      console.log(args[i]);
    }

  }
}

