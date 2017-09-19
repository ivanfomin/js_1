console.log(1 + 2); //3
console.log(1 + "");    //1
console.log(1 + " ");   //1
console.log(1 + "Hello");   //1Hello
console.log("Hello " + "World");    //Hello World

//----------------------------------------------------

var obj = {age: 42, name: "Vasya"};

console.log(obj.surname);   //undefined

obj.surname = "Petrov";

console.log(obj.surname);   //Petrov

delete obj.surname;

console.log(obj.surname);   //undefined

//--------------------------------------------------------

var x = 42;

function f() {
    var x = 24;
}

function f_1() {
    x = 24;
}

f();

console.log(x); //42

f_1();

console.log(x); //24

//----------------------------------------------------------

var length = 4;
var width = 3;
var height = 2.5;

function squareRoom(l, w, h) {
    var wall_1 = l * h;
    var wall_2 = w * h;
    var wall_3 = wall_1;
    var wall_4 = wall_2;

    return [wall_1, wall_2, wall_3, wall_4]
}

var square = squareRoom(length, width, height);

console.log(square); //[ 10, 7.5, 10, 7.5 ]

var sum = 0;

for (i = 0; i < square.length; ++i) {
    sum += square[i];
}

console.log(sum);

const wallpaper_1 = 1;  //1m length of the roll
const wallpaper_2 = 0.6;    //0.6m length of the roll

console.log("First case quantity rolls for the room " + Math.ceil(sum / wallpaper_1));

console.log("Second case quantity rolls for the room " + Math.ceil(sum / wallpaper_2));





