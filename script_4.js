/**
 * Created by ioan on 30.09.17.
 */
'use strict';


var animal = {
    sex: 'm',
    legs: 4,
    tail: true,
    swing: false,
};

var pig = {
    weight: 30,
    dirty: true
};

var peppa = {
    moods: ['FUN', 'OK', 'SAD'],
    myMood: ''
};

peppa.myMood = peppa.moods[1];

console.log(peppa.myMood);  //OK

pig.__proto__ = animal;

peppa.__proto__ = pig;

pig.grunt = function () {
    return "Snake, snake!!!";
}

console.log(pig.grunt());   //Snake, snake!!!
console.log(peppa.grunt()); //Snake, snake!!!

peppa.grunt = function () {
    var str = '';
    if (this.myMood === this.moods[0]) {
        str = "Snake, snake!!!";
    }
    else if (this.myMood === this.moods[1]) {
        str = "Snake.";
    }
    else if (this.myMood === this.moods[2]) {
        str = "Dash it!";
    }
    return str;
}

console.log(peppa.grunt()); //Snake

peppa.myMood = peppa.moods[2];

console.log(peppa.grunt()); //Dash it!


//-------------------------------------------------------------------------------


class Animal {
    constructor(sex, legs, tail, swing) {
        this.sex = sex;
        this.legs = legs;
        this.tail = tail;
        this.swing = swing
    }
}

class Pig {
    constructor(weight, dirty) {
        this.weight = weight;
        this.dirty = dirty;
    }
}

class Peppa {
    constructor(mood) {
        this._moods = ['FUN', 'OK', 'SAD'];
        this.myMood = this._moods[mood];
    }

    get moods() {
        return this._moods;
    }

    set moods(value) {
        this._moods = value;
    }
}

Pig.__proto__ = new Animal('m',4,true,false);

Peppa.__proto__ = new Pig(30,true);

let p = new Peppa(1);
console.log(p.myMood);  //OK
console.log(p.legs);











