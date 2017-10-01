function Calculator(a, b, s) {
    this.a = a;
    this.b = b;
    this.sign = s;
    this.result = null;

    this.calc = function () {
        if (this.result === null) {
            if (this.sign === '+') {
                this.result = this.a + this.b;
            } else if (this.sign === '-') {
                this.result = this.a - this.b;

            }
        }
        return this.result;
    }

}

var calculator = new Calculator(2, 3, '+');

console.log(calculator.calc()); //5

console.log(calculator.calc()); //5

var calculator1 = new Calculator(20, 30, '-');

console.log(calculator1.calc());    //-10

var calculator2 = new Calculator(20, 30, '*');

console.log(calculator2.calc());    //null
