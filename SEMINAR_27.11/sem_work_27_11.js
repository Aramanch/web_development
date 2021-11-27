
console.log('Задание 15')

function Card(from, to){

    this.from = from;
    this.to = to;

    this.show = function(){
        alert(`From ${from} to ${to}`);
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
      alert(`${this.name},${this.age},${this.height}`);
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


  
hum1.getInfo();
alert(hum1.firstname);



console.log('Задание 17')
let humans = ["Коля", 23, 180,
                "Даша", 19, 170,
                "Ваня", 18, 192,
                "Петя", 45, 178,
                "Вася", 34, 197,
                "Джони", 40, 168,
                "Катя", 37, 160,
                "Петя", 29, 200,
                "Соня", 21, 172,
                "Женя", 25, 175]
let arr = {}
for (let i = 0;i <= humans.length-1; i+3){
    arr[humans[i]]= humans[i+1],humans[i+2]
}

console.log(arr)





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















