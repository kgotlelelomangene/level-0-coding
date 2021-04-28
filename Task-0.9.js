//Task 0.9

function vowels(str){
    var arr = str.split("");
    //var isVowel = "";

    //var vowel = str.match(/[aeiou]/gi);
    
    //vowel.forEach(x => {console.log(x) });

    for(var i=0 ; i<arr.length ; i++){
        
        var theIndex = arr.indexOf([i]);
        var vowel = str.match(/[aeiou]/gi);

        if(theIndex = vowel){
            console.log(vowel);
        }
    }

}

vowels("We are here to learn");