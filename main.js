function RNG(upperBound){
    var random = Math.floor(Math.random()*upperBound);
    return random;
}

function removeFromArray(array, position){
    var tempArray = array;
    array[position] = null;
    var newArray = [];
    for(var i=0; i<tempArray.length; i++){
        if(tempArray[i]!==null){
            newArray.push(tempArray[i]);
        }
    }
    return newArray;
}

// --- --- --- questions --- --- ---
var question1 = {
    question = "What's the world's longest river?",
    ans1 = "Nile",
    ans2 = "Mississippi",
    ans3 = "Amazon",
    ans4 = "Yellow River",
    answer = "Amazon"
};
var question2 = {
    question = "What's the world's largest island?",
    ans1 = "Greenland",
    ans2 = "Australia",
    ans3 = "Madagascar",
    ans4 = "Antarctica",
    answer = "Greenland"
};
var question3 = {
    question = "Where was the california roll invented?",
    ans1 = "Taiwan",
    ans2 = "Sapporo",
    ans3 = "California",
    ans4 = "British Columbia",
    answer = "British Columbia"
};
var question4 = {
    question = "What is corn grouped into?",
    ans1 = "Berries",
    ans2 = "Roses",
    ans3 = "Grass",
    ans4 = "Vegetable",
    answer = "Grass"
};

// --- --- --- load with arrays --- --- ---
var questionArray = [question1,question2,question3,question4];

var tempAns1 = {};
var tempAns2 = {};
var tempAns3 = {};
var tempAns4 = {};

