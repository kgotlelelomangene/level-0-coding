//Task 0.9

function vowels(str){
    var arr = str.split("");
    var temp_str = "";

    for(var i=0 ; i<arr.length ; i++){
        
        if(arr[i].match(/[aeiou]/gi)){
            if(temp_str.match(arr[i]) == null){

                temp_str = temp_str + arr[i] + ",";
            }
           
        }
        
    }
    console.log("Vowels: " + temp_str) ;

}

vowels("We are here to learn");