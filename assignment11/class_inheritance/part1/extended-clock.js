/*Create a new class ExtendedClock that inherits from Clock and
   adds the parameter precision – the number of ms between “ticks”.
    Should be 1000 (1 second) by default*/
class ExtendedClock extends Clock {
    constructor({template, precision = '1000'}){ //if parameter precision is null then it uses default value
        super({template});
        this.precision = precision;
    }

    start(){
        super.render();
        this.timer = setInterval(() => super.render(), this.precision);
    }
}


    
    