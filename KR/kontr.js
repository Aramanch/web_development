
function buttonClick() {
    let slovo = document.getElementById('input');
    word = slovo.value



   

    let spp = [];
    for (let i = 0; i < word.length; i++) {
        spp[i] = " _ ";
    }

    for (let g = 0; g < word.length; g++){
        eval("let id_"+g+"="+g);
        id_0 = word[0];
        id_1 = word[1];
        id_2 = word[2];
        id_3 = word[3];
        id_4 = word[4];
        id_5 = word[5];
        id_6 = word[6];
        id_7 = word[7];
    }

    let sp = []
    for (let t = 0;t<word.length;t++){
        sp[t] = word[t]
    }

    








    
    let longWord = word.length;
    
    let ps = spp;
    
    let numberOfAttempts = 9;
    
    alert("Слово состоит из " + "''" + longWord + "''" + " букв " + " и у Вас есть " + numberOfAttempts + " попыток!");
    alert(spp.join(" ") + '\n' + 'а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я')
  
    while ((numberOfAttempts !== 0) && (longWord > 0)) {
   
        let guess = prompt("Введите букву").toLowerCase();
    
            if (guess === null) {
            break;
  
            } else if (guess.length !== 1) {
            alert("Введите только одну букву!");

    
            } else if(guess == sp[0]){
                ps[0] = guess;
                longWord--;
                restOfLetter = longWord;
            }
            
            
            else {
            for (let p = 0; p < word.length; p++) {
   

                if ( guess === ps[p]) {
                    alert("Такая буква уже отгадана!")
                    break;
                } 
                if (guess === word[0]){
                    ps[0] = guess;
                    longWord--;
                    restOfLetter = longWord;

                }
                if ( guess === word[p]) {
                    ps[p] = guess;
                    longWord--;
                    restOfLetter = longWord;
                }

                
            }
   
            for (let c = 0; c < 1; c++) {
                    if (id_0 === guess || id_1 === guess || id_2 === guess || id_3 === guess || id_4 === guess || id_5 === guess || id_6 === guess || id_7 === guess){
                    alert("Вы отгадали букву!!! " + ps.join(" ") + " колличество ваших попыток = " + numberOfAttempts)
                    break;
                      
                } else {
                    numberOfAttempts--;
                    alert("Увы такой буквы в слове " + ps.join(" ") + " нет, колличество ваших попыток = " + numberOfAttempts)
                    break;
                }
            }
        }               
    }
    
    if (longWord == 0){
    alert("Вы отгадали все " + "''" + word.length + "''" + " букв в слове " + ps.join(" ") + " и у Вас в запасе осталось ещё " + numberOfAttempts + " попыток!");
    } 
   
    else {alert("У вас закончились попытки и слово не отгаданно попробуйте заново")}     

}
















