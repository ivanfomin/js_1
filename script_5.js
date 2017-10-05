function Calculator(a, b, s) {
    this.a = a;
    this.b = b;
    this.sign = s;
    this.result = null;

    this.calc = function () {
        if (this.result === null) {
            switch (this.sign) {
                case('-'):
                    this.result = this.a - this.b;
                    break;
                case('*'):
                    this.result = this.a * this.b;
                    break;
                case('/'):
                    if (this.b === 0) {
                        throw new Error('Null division');
                        this.result = null;

                    } else {
                        this.result = this.a / this.b;
                        break;
                    }
                default:
                    this.result = this.a + this.b;
            }
        }
        return this.result;
    }
}

let calculator = new Calculator(2, 0, '/');
try {
    console.log(calculator.calc());
} catch (err) {
    console.log(err.message);   //Null division
}

//------------------------------------------------------------

class Product {
    constructor(name, vendor, price) {
        this.name = name;
        this.vendor = vendor;
        if (price <= 0) {
            throw new Error('Negative price');
        } else {
            this.price = price;
        }
    }
}

let product;
let product_1;
try {
    product = new Product('apple', '123', 42);
    product_1 = new Product('pear', '124', -5);
} catch (err) {
    console.log(err.message);
}

console.log(product);   //Product { name: 'apple', vendor: '123', price: 42 }

console.log(product_1); //undefined

//Так как в конструкторе было брошено исключение, он не завершил свою работу и объект остался undefined
