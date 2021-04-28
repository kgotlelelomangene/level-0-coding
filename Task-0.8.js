//Task 0.8

function hoursAndMinutes(num){
    var hours = Math.floor(num/60);
    var minutes = Math.floor(num%60);

    if(hours <= 1 && minutes <= 1){
        console.log(hours + " hour, " + minutes + " minute");
    }
    else if(hours <= 1 && minutes > 1){
        console.log(hours + " hour, " + minutes + " minutes");
    }
    else if(hours > 1 && minutes <= 1){
        console.log(hours + " hours, " + minutes + " minute");
    }
    else {
        console.log(hours + " hours, " + minutes + " minutes");
    }

    
}

hoursAndMinutes(71);



  
