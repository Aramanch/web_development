
//  Задание 8
console.log('Задание 8')
let structure = null
function arrayToList(lst){
    for (let i=lst.length-1;i>=0;i--){
        structure = {
            'value':lst[i],
            'rest':structure
        }

    }
    return structure
}

let sp = [1, 2, 3, 4];
spisok = arrayToList(sp)

console.log(spisok);



function listToArray(list){
    let newar = new Array
    while (list.rest != null){
        newar.push(list.value)
        list = list.rest
    }
    newar.push(list.value)
    return newar
}

spisokk = listToArray(spisok)
console.log(listToArray(spisok))


function prepend(item,listt){
    let a = listt
    a.unshift(item)
    return a

}

console.log(prepend(5,spisokk))


function nth(listtt, num){
    
    if(listtt.indexOf(listtt[num]) !== -1){
        return listtt[num]
    }
    else{
        console.log(undefined)
        return nth(listtt,num-1)
    }
}

console.log(nth(spisokk,5))

// Задание 9
console.log('Задание 9')

function deepEqual(fir,sec){

    const areobj = (typeof fir === 'object' && typeof sec === 'object')
    const arenotnull = (fir !== null &&  sec !== null)
    
    if (areobj && arenotnull){
        for (let i in fir){
            if (!sec.hasOwnProperty(i)){
                return false
            }
            if (typeof fir[i] == 'object' && typeof sec[i] == 'object'){
                res = deepEqual(fir[i],sec[i])
                if (!res){ 
                    return false
                }
                }
                else{
                    if (fir[i] != sec[i])
                        return false
            }
            return true
        }
    }else{
        return fir === sec
    }



}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));










// Задание 10
console.log('Задание 10')

  
console.log([[0, 1], [2, 3,8], [4, 5]].reduce(function(a, b) {return a.concat(b)}))


// Задание 11
console.log('Задание 11')



let data = [
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
]

function mid(sp){
    function plus(a,b) {
        return a+b;
    }
    return (sp.reduce(plus) / sp.length);
}

let mids = [];
data.forEach(function(person){
    data.forEach(function(child){
        if (child.mother === person.name){
            mids.push(child.born - person.born);
        }
    })
});

console.log(mid(mids));


// Задание 12

console.log('Задание 12')


cents = {};

function mid(sp){
    function plus(a,b) {
        return a+b;
    }
    return (sp.reduce(plus) / sp.length);
}


data.forEach(function(person){
    if (cents[Math.ceil(person.died/100) + ' век'] == undefined){
        cents[Math.ceil(person.died/100) + ' век'] = [person.died-person.born];
    } 
    else{
        cents[Math.ceil(person.died/100) + ' век'].push(person.died-person.born);
    }
});

for (let i of Object.keys(cents)){
    cents[i] = mid(cents[i]) + ' лет';
}

console.log(cents);

// Задание 13

console.log('Задание 13')

function every(arr,fun){
    for(let i = 0;i <= arr.length - 1;i++){
        if (!fun(arr[i])){
            return false
        }
    
    }
    return true
}

function some(arrr,func){
    for(let i = 0;i <= arrr.length - 1;i++){
        if (func(arrr[i])){
            return true
        }
    }
    return false
}
  



console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));











































