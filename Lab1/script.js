var a = 5;
var b = 10;

var myname = "myname";


function addNumber(numA, numB) {
    return Number(numA) + Number(numB);

}

function subtractNumber(numA, numB) {
    return Number(numA) - Number(numB);
}

function checkNums (num1,num2){
    if (num1 = num2){
        return "the values are equal";
    }
    else if(num2 > num1){
        return "true";
    }
    else{
        return "false";
    }
}
function Array (a,b,c,d){
    var words = [a,b,c,d];
    return words;
}

function convert (minutes){
    var hours = parseInt(minutes/60);
    minutes = minutes-(hours*60);
    return String(hours) + "hours and " +String(minutes); + "minutes"

}
function areaPer(radius){
    area = radius*radius*3.14159;
    perimeter = 2*radius*3.14159;
    return area +" Area and the perimeter is" + perimeter;
}

function distanceConversion(distance, unit){
    var mToKm = 1.60934;
    var kmToM = 0.621371;
    if (unit = "m"){
        return distance*mToKm;
    }
    else{
        return distance*kmToM;
    }
}

function BMICalculator(weight,height){
    return weight/(height*height);
}

function date(date){
    

}