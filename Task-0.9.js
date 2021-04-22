//Task 0.9
console.log("\nTask 0.9 ");

function vowels(str){

    var vowel = str.match(/[aeiou]/gi);
    vowel.forEach(x => {console.log(x) });;

}

vowels("We are here to learn");