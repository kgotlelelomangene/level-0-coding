//Task 0.10

function commonCharacters(str1, str2){

    var common = "";

    var arr1 = str1.split("");
    var arr2 = str2.split("");

    for (let i = 0; i < arr1.length; i++) {
        var index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr2.splice(index, 1);
             
            common = common + ", " + arr1[i]; 
        }
    }
    return common;
}
console.log("Common letters: " + commonCharacters("house","computers"));