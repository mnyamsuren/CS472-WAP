"use strict";

const person = {
    name: "",
    dataOfBirth: null,
    getName: function(){
        return this.name;
    },
    setName: function(newName){
        this.name = newName;
    }
} 

person.name
person.getName()
person.setName("Anna");

const josh = Object.create(person);
josh.setName("Josh");
josh.dateOfBirth = new Date(1998, 11, 10);
josh.prototype =
josh.__proto__

console.log(`The person's name is ${josh.getName()}\n`) //
console.log(`${josh.getName()} was born on ${josh.dateOfBirth.toISOString().substring(0, 10)}`);

// var count = (function () {
//     var counter = 0;
//     return {
//         'add': function () {
//             counter += 1;
//         },
//         'reset': function () {
//             counter = 0;
//         },
//         'value': function () {
//             return counter;
//         },
//         'make_adder': function (inc) {
//             counter += inc;
//         }
//     }
// })();

var make_adder = function (inc) {
    var counter = 0;
    return function() {
        return counter += inc;
    };
};

add7=make_adder(7);
console.log(add7);

function reverse(str){
    let revStr=[];
    for(let i=str.length-1; i>=0; i--){
        revStr.push(str.charAt(i));
    }
    return revStr.join("");
}
console.log(reverse("jag testar"));
