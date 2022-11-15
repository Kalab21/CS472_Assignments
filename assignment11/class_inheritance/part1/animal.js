class Animal {

    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name) {
      /*Answer
      we must call super when we extend and we inherit the fields 
      of the parent class inorder to access and deifne "this.name"*/
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); //Okay now
  alert(rabbit.name); // White Rabbit