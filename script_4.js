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

//Устанавливаем настроение
peppa.myMood = peppa.moods[1];

console.log(peppa.myMood);  //OK

pig.__proto__ = animal;

peppa.__proto__ = pig;

//Хрюкаем
pig.grunt = function () {
    return "Snake, snake!!!";
}

console.log(pig.grunt());   //Snake, snake!!!
console.log(peppa.grunt()); //Snake, snake!!!

//Хрюкаем от настроения
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

class Pig extends Animal {
    constructor(sex, legs, tail, swing, weight, dirty) {
        super(sex, legs, tail, swing);
        this.weight = weight;
        this.dirty = dirty;
    }

    //Хрюкаем
    grunt() {
        return "Snake, snake!!!";
    }
}

class Peppa extends Pig {
    constructor(sex, legs, tail, swing, weight, dirty, mood) {
        super(sex, legs, tail, swing, weight, dirty);
        this._moods = ['FUN', 'OK', 'SAD'];
        this.myMood = this._moods[mood];
    }

    grunt() {
        if (this.myMood === this._moods[0]) {
            return super.grunt();
        } else if (this.myMood === this._moods[1]) {
            return "Snake.";
        } else if (this.myMood === this._moods[2]) {
            return "Dash it!";
        }
    }

    //Устанавливаем настроение
    moods(value) {
        this.myMood = this._moods[value];
    }
}


var p = new Peppa('m', 4, true, false, 42, true, 1);

console.log(p.myMood);  //OK

p.moods(2);

console.log(p.grunt());  //Dash it!













