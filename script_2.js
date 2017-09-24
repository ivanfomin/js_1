/**
 * Created by ioan on 22.09.17.
 */
function factorial(n) {
    var res = 1;
    while (n > 0) {
        res *= n;
        n--;
    }
    return res;
}

console.log(factorial(5));  //120

//---------------------------------------------------

function factorial2(n) {
    if (n == 1) {
        return n;
    } else {
        return n * factorial2(n - 1);
    }

}

console.log(factorial2(5)); //120

//----------------------------------------------------

const num = 10000;

console.time('time');

console.log(factorial(num));    //Infinity

time = console.timeEnd('time');

console.log(time);  // 3ms

console.time('time2');

console.log(factorial2(num));   //Infinilty

time = console.timeEnd('time2');

console.log(time);  // 1ms

// Функция с факториалом выполняется быстрее, но на значение например 50000, происходит переполнение стека

//-------------------------------------------------

let func = function (x, y = 100) {

    return x / y;
};

console.log(func(480));

// Второй параметр со знаком равно это значение по умолчанию, эту ф-цию можно вызывать либо с одним, либо с двумя параметрами
//В данном примере ее можно использовать для нахождения процента

//----------------------------------------------------

function f(n) {

    function mult(m) {
        return m * n;
    }

    return mult(n);
}

console.log(f(3));  //9

console.log(f(5));  //25
//Пример конечно бредовый, ф-ция f(n) возвращает квадрат переданного ей числа

//--------------------------------------------------------------------------

function test(n) {

    function res(m) {
        return m + n;
    }

    return res;
}

var v = test(4);

console.log(v(2));  //6 (2+4)
console.log(v(10)); //14 (10 + 4)
console.log(v(-1)); //3 (-1 + 4)


