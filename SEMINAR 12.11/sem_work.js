// Задание 1


for (let i=0; i<7; i++){
    let stroka = "";
    for (let j=0; j<=i; j++){
        stroka += "#";
    }
    console.log(stroka)
}


// Задание 2


for (let i=1; i<100; i++){
   
  
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FIZZBUZZ');
    }
    else if (i % 5 == 0){
        console.log('BUZZ');
    }
    else if (i % 3 == 0){
        console.log('FIZZ');
    }
    else{
        console.log(i);
    }
}

// Задание 3

for (let i=1;i<8; i++){
    if (i % 2 != 0){
        console.log('# # # # ');
    }
    else if (i % 2 == 0){
        console.log(' # # # # ');
    }
}





//  Задание 4

function min(n1, n2){
    if (n1 <= n2){
        return(n1);
    }
    else{
        return(n2);
    }  
}

console.log(min(5, 5))


// Задание 5


function countBs(strr){
    return strr.length;
}

console.log(countBs('ARAMMM'))



function countChar(strr,numb){
    console.log(countBs(strr))
    return (strr.charAt(numb));
}

console.log(countChar('ARAMMM',5))


// Задание 6

function range(d1,d2,step = 1){
    let arr = [];
    for (let i=d1;i<=d2;i = i + step){
        arr.push(i)
    }
    return(arr)
}

console.log(range(1,10,2))


function sum(mass){
let sm = 0;
for(let i = 0; i < mass.length; i++){
    sm += mass[i];
    }
    return(sm);
}

console.log(sum([1,2,3,4]))


// Задание 7

function  reverseArray(arr) {
    let final_arr = new Array;
    for (let i = arr.length-1; i !== -1; i--) {
        final_arr.push(arr[i])
    }
    return final_arr
}

console.log(reverseArray([1, 2, "3", "4", 5, "6", 7, 8]), "rev")

function  reverseArrayInPlace(arr) {
    let k = arr.length - 1
    if (arr.length % 2 === 0) {
        for (let i = 0; i < (arr.length / 2); i++) {
            let arr_1 = arr[i];
            arr[i] = arr[k];
            arr[k] = arr_1;
            k--
        }

    } else {
        for (let i = 0; i < ((arr.length - 1) / 2); i++) {
            let arr_1 = arr[i];
            arr[i] = arr[k];
            arr[k] = arr_1;
            k--
        }

    }

}

let arrg = [1, 2, "3", "4", 5, "6", 7, 8, 9];
reverseArrayInPlace(arrg);
console.log(arrg, "orig");