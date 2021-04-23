//Task 0.8

function hoursAndMinutes(num){
    var hours = Math.floor(num/60);
    var minutes = Math.floor(num%60);

    console.log(num +  " has " + hours + " hour(s), " + minutes + " minute(s)");
}

hoursAndMinutes(71);