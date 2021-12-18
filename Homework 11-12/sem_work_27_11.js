

console.log('Задания 1-5')

let city1 = {};

city1.name = 'ГородN',
city1.population = 10000000,
city1.getName = getName
city1.exportStr = exportStr,
city1.getCity = getObj;

function getName() {
    return this.name;
}

function exportStr() {
    return 'name:'+ this.name+'\npopulation:' + this.population + '\n'
}

function getObj(){
    return this;
}

let city2 = {
    name: 'ГородM',
    population: 1e6,
    getName: getName,
    exportStr: exportStr,
    getCity: getObj,
}





console.log('Задание 3');
console.log(city1.getName(), city2.getName());


console.log('Задание 4');
console.log(city1.exportStr(), city2.exportStr());


console.log('Задание 5');
console.log(city1.getCity(), city2.getCity());





console.log('Задание 6')
let obj = {};
obj.method3 = function () {
    return "метод3";
};
obj.method2 = function () {
    return this;
};
obj.method1 = function () {
    return this;
};
console.log(obj.method1().method2().method3());


// Решено



console.log('Задание 7')

d1 = new Array(45,78,10,3)

d1[7] = 100

console.log(d1)
console.log(d1[6])
console.log(d1[7])








console.log('Задание 8')

d2 = new Array(45,78,10,3)
let sum2 = 0

for (let i=0; i < d2.length;i++){
    sum2 = sum2 + d2[i]
}

console.log(sum2)








console.log('Задание 9')

d3 = new Array(45,78,10,3)
let sum3 = 0
d3[7] = 100

for (let i=0; i < d3.length;i++){
    sum3 = sum3 + d3[i]
}

console.log(sum3)





console.log('Задание 10')

let d4 = [45,78,10,3];
function my(a, b) {
    return a-b;
}

console.log(d4.sort(my));






console.log('Задание 11')


let d5 = new Array();


for (let i=0; i < 3;i++){
    d5[i] = [];
    for (let j=0; j < 4;j++){
        d5[i][j] = 5
    }

}

console.log(d5)





console.log('Задание 12');


function Vector(x, y){

    this.x = x;
    this.y = y;


    this.plus = function (vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }


    this.minus = function (vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    this.length = function () {
        return Math.sqrt(x*x + y*y);
    }
}

console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3,4).length());








console.log('Задание 13');

function TextCell(text){
    this.text = text;
}

function StretchCell(inner, width, height){
    this.text = inner.text;
    this.width = width;
    this.height = height;

    this.minWidth = function () {
        return Math.max(
            this.text.split('\n').sort(
                function(a,b){
                    return b.length - a.length})[0]
                .length,
            this.width)
    }

    this.minHeight = function () {
        return Math.max(this.text.split('\n').length, this.height)
    }

    this.draw = function(width, height){
        text_joined = this.text.split('\n').join('');
        text_joined += " ".repeat(width*height - text_joined.length);
        cell = [];
        for (let i=0; i<height; i++){
            s = '';
            for (let j=0; j<width; j++){
                s += text_joined[i*width + j];
            }
            cell.push(s);
        }
        return cell;
    }
}

var sc = new StretchCell(new TextCell("ab\nde\nevf"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(7,3));



console.log('Задание 15')

function Card(from, to){

    this.from = from;
    this.to = to;

    this.show = function(){
        console.log(`From ${from} to ${to}`);
    }
}

let c1 = new Card('Екатеринбург', 'Москва')
c1.show();




console.log('Задание 16')



class Human {

    constructor(name,age,height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
  
    getInfo() {
      console.log(`${this.name},${this.age},${this.height}`);
    }

    get firstname(){
        return(this.name)
    }
  
  }
  
  
  
  

let hum1 = new Human("Коля", 23, 180)
let hum2 = new Human("Даша", 19, 170)
let hum3 = new Human("Ваня", 18, 192)
let hum4 = new Human("Петя", 45, 178)
let hum5 = new Human("Вася", 34, 197)
let hum6 = new Human("Джони", 40, 168)
let hum7 = new Human("Катя", 37, 160)
let hum8 = new Human("Петя", 29, 200)
let hum9 = new Human("Соня", 21, 172)
let hum10 = new Human("Женя", 25, 175)



console.log(hum1.getInfo());






console.log('Задание 17')
let humans = [
    ['Коля', 23, 180],
    ['Даша', 19, 170],
    ['Ваня', 18, 192],
    ['Петя', 45, 178],
    ['Вася', 34, 197],
    ['Джони', 40, 168],
    ['Катя', 37, 160],
    ['Петя', 29, 200],
    ['Соня', 21, 172],
    ['Женя', 25, 175]
];



function sortByName(humans) {
    for (let i = 0; i < humans.length - 1; i++) {
        for (let j = i + 1; j < humans.length; j++) {
            if (humans[i].name > humans[j].name) {
                let max = humans[i];
                humans[i] = humans[j];
                humans[j] = max;
            }
        }
    }
    return humans;
    
}


console.log(humans[0][2])

function sortByHeight(humans) {
    for (let j = 0; j < humans.length - 1; j++) {
        for (let i = 0; i < humans.length - 1; i++) {
            if (humans[i][2] > humans[i+1][2]){
                dg = humans[i];
                humans[i] = humans[i+1]
                humans[i+1] = dg   
            }
        }
}
    return humans;
}

console.log(sortByHeight(humans));





console.log('Задание 18')
let dt1 = new Date(2045, 0, 1, 0,0);
console.log(dt1);



console.log('Задание 19')
dt2 = Date.now() / 1000
console.log(dt2)









console.log('Задание 20')

quants = {'январь': 31,'февраль': 28,'март': 31,'апрель': 30,'май': 31,
'июнь': 30,'июль': 31,'август': 31,'сентябрь': 30,'октябрь': 31,'ноябрь': 30,'декабрь': 31,}
quantss = {'январь': 31,'февраль': 29,'март': 31,'апрель': 30,'май': 31,
'июнь': 30,'июль': 31,'август': 31,'сентябрь': 30,'октябрь': 31,'ноябрь': 30,'декабрь': 31,}



function getDays(year,month){
    if (year % 4 == 0){
        return quantss[month]
        }
    else{
        return quants[month]
     }

}

console.log(getDays(2008,'февраль'))



console.log('Задание 22')

Number.example.isOdd = function(dig) { if (dig % 2 == 1) return true; else return false;}

let a1 = 7;
let a2 = a1.isOdd(a1)
console.log(a2)








console.log("Задание 23");


function Ladder(step){
    this.step = step,
    this.add = function(i){
        this.step += i;
        return this;
    },

    this.mins = function(i){
        this.step -= i;
        return this;
    },

    this.pls = function(i){
        this.step *= i;
        return this;
    },

    this.div = function(i){
        this.step /= i;
        return this;
    }
    
}

let otv = new Ladder(7).add(2).mins(1).pls(3).div(8);
console.log(otv.step);






console.log('Задание 24');

function Unit(x, y){
    this.x = x;
    this.y = y;
}

Unit.example = {
	
    get X() {return this.x;},
    get Y() {return this.y;},
    set X(value) {this.x=value;},
    set Y(value) {this.y=value;}
}

function Fighter(power){
    this.power = power;
}

Fighter.example = Unit.example;
Fighter.example += {
    get power() {return power;},
    set power(value) {this.power = value;}
}

f = new Fighter(8);
f.X = 7;
f.Y = 8;
console.log(f.Y);












