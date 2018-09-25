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
    question: "What's the world's longest river?",
    ans1: "Nile",
    ans2: "Mississippi",
    ans3: "Amazon",
    ans4: "Yellow River",
    answer: "Amazon",
};
var question2 = {
    question: "What's the world's largest island?",
    ans1: "Greenland",
    ans2: "Australia",
    ans3: "Madagascar",
    ans4: "Antarctica",
    answer: "Greenland",
};
var question3 = {
    question: "Where was the california roll invented?",
    ans1: "Taiwan",
    ans2: "Sapporo",
    ans3: "California",
    ans4: "British Columbia",
    answer: "British Columbia",
};
var question4 = {
    question: "What is corn grouped into?",
    ans1: "Berries",
    ans2: "Roses",
    ans3: "Grass",
    ans4: "Vegetable",
    answer: "Grass",
};
var question5 = {
    question: "What is the plural of octopus?",
    ans1: "Octopi",
    ans2: "Octopuses",
    ans3: "Slicks",
    ans4: "Murder",
    answer: "Octopuses",
};
var question6 = {
    question: "What's the largest of this bunch?",
    ans1: "Positron",
    ans2: "Electron",
    ans3: "Muon",
    ans4: "Tau",
    answer: "Tau",
};
var question7 = {
    question: "Which of the following is the earliest example of animation?",
    ans1: "Pantomimes Lumineuses",
    ans2: "Le Clown et ses chiens",
    ans3: "Pauvre Pierrot",
    ans4: "The Execution of Mary Stuart",
    answer: "Pantomimes Lumineuses",
};
var question8 = {
    question: "Which of these Spider-Man villians has the most appearances?",
    ans1: "Big Wheel",
    ans2: "Stilt-Man",
    ans3: "Cyclone",
    ans4: "Mad Jim Jaspers",
    answer: "Stilt-Man",
};

// --- --- --- load with arrays --- --- ---
var questionArray = [question1,question2,question3,question4,question5,question6,question7,question8];
var tempArray = questionArray;

var tempAns1 = {};
var tempAns2 = {};
var tempAns3 = {};
var tempAns4 = {};

function questionLoader(){
    if(tempArray.length>0){
        var tempRNG1 = RNG(tempArray.length);
        tempAns1 = tempArray[tempRNG1];
        tempArray = removeFromArray(tempArray,tempRNG1);

        var tempRNG2 = RNG(tempArray.length);
        tempAns2 = tempArray[tempRNG2];
        tempArray = removeFromArray(tempArray,tempRNG2);

        var tempRNG3 = RNG(tempArray.length);
        tempAns3 = tempArray[tempRNG3];
        tempArray = removeFromArray(tempArray,tempRNG3);

        var tempRNG4 = RNG(tempArray.length);
        tempAns4 = tempArray[tempRNG4];
        tempArray = removeFromArray(tempArray,tempRNG4);

        printTheThings();
    } else if(tempArray.length<1){
        console.log("Question Array is empty!");
    }
}

// --- --- ---append the thingys --- --- ---
function printTheThings(){
    $("#q1").text(tempAns1.question);
    $("#q2").text(tempAns2.question);
    $("#q3").text(tempAns3.question);
    $("#q4").text(tempAns4.question);

    printTheAnswers();
}

function printTheAnswers(){
    $("#question1a").text(tempAns1.ans1);
    $("#question1b").text(tempAns1.ans2);
    $("#question1c").text(tempAns1.ans3);
    $("#question1d").text(tempAns1.ans4);

    $("#question2a").text(tempAns2.ans1);
    $("#question2b").text(tempAns2.ans2);
    $("#question2c").text(tempAns2.ans3);
    $("#question2d").text(tempAns2.ans4);

    $("#question3a").text(tempAns3.ans1);
    $("#question3b").text(tempAns3.ans2);
    $("#question3c").text(tempAns3.ans3);
    $("#question3d").text(tempAns3.ans4);

    $("#question4a").text(tempAns4.ans1);
    $("#question4b").text(tempAns4.ans2);
    $("#question4c").text(tempAns4.ans3);
    $("#question4d").text(tempAns4.ans4);
}

// --- --- --- get the answers --- --- ---
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";

var isAns1 = false;
var isAns2 = false;
var isAns3 = false;
var isAns4 = false;

var fourAnswers = 0;

$("#question1a, #question1b, #question1c, #question1d").each(function(){
    $(this).on("click",function(){
        if(isAns1 === false){
            answer1 = $(this).text();
            console.log(answer1);
            isAns1 = true;
            fourAnswers++;
            $(this).css("background-color","black");
        } else {
            console.log("This question has already been selected");
        }
    });
});

$("#question2a, #question2b, #question2c, #question2d").each(function(){
    $(this).on("click",function(){
        if(isAns2 === false){
            answer2 = $(this).text();
            console.log(answer2);
            isAns2 = true;
            fourAnswers++;
            $(this).css("background-color","black");
        } else {
            console.log("This question has already been selected");
        }
    });
});

$("#question3a, #question3b, #question3c, #question3d").each(function(){
    $(this).on("click",function(){
        if(isAns3 === false){
            answer3 = $(this).text();
            console.log(answer3);
            isAns3 = true;
            fourAnswers++;
            $(this).css("background-color","black");
        } else {
            console.log("This question has already been selected");
        }
    });
});

$("#question4a, #question4b, #question4c, #question4d").each(function(){
    $(this).on("click",function(){
        if(isAns4 === false){
            answer4 = $(this).text();
            console.log(answer4);
            isAns4 = true;
            fourAnswers++;
            $(this).css("background-color","black");
        } else {
            console.log("This question has already been selected");
        }
    });
});

// --- --- --- answer checker --- --- ---
var isAns1True = false;
var isAns2True = false;
var isAns3True = false;
var isAns4True = false;

function trueOrFalse(input){
    if(input === true){
        return "right \n";
    } else {
        return "wrong \n";
    }
}

function answerCheck(){

    if(answer1 === tempAns1.answer){
        isAns1True = true;
        console.log("This is the correct answer");
    } else {
        console.log("This is wrong, the answer is " + tempAns1.answer);
    }
    if(answer2 === tempAns2.answer){
        isAns2True = true;
        console.log("This is the correct answer");
    } else {
        console.log("This is wrong, the answer is " + tempAns2.answer);
    }
    if(answer3 === tempAns3.answer){
        isAns3True = true;
        console.log("This is the correct answer");
    } else {
        console.log("This is wrong, the answer is " + tempAns3.answer);
    }
    if(answer4 === tempAns4.answer){
        isAns4True = true;
        console.log("This is the correct answer");
    } else {
        console.log("This is wrong, the answer is " + tempAns4.answer);
    }

    var isReset = confirm("You got question 1 "+trueOrFalse(isAns1True)+"You got question 2 "+trueOrFalse(isAns2True)+
        "You got question 3 "+trueOrFalse(isAns3True)+"You got question 4 "+trueOrFalse(isAns4True));
    if(isReset === true){
        resetTheThingy();
    } else {
        resetTheThingy();
    }
}

// --- --- --- time stuff --- --- ---
var milliseconds = 30000;
var seconds = 30;

var timeLimit;
var countdown;

function finalCountdown(){
    timeLimit = setTimeout(answerCheck,milliseconds)
    countdown = setInterval(function(){
        if(seconds>=0){
            $("#timer").text("There is "+seconds+" seconds left!")
            seconds--;
        } else {
            clearInterval(countdown);
            seconds = 30;
        }
    },1000);

    return {timeLimit,countdown};
}
$("#enterAnswers").on("click",function(){
    clearTimeout(timeLimit);
    clearInterval(countdown);
    answerCheck();
    seconds = 30;
});
// --- --- --- window stuff --- --- ---
window.onload = function(){
    finalCountdown();
    questionLoader();
}

function resetTheThingy(){
    tempAns1 = {};
    tempAns2 = {};
    tempAns3 = {};
    tempAns4 = {};

    isAns1 = false;
    isAns2 = false;
    isAns3 = false;
    isAns4 = false;

    answer1 = "";
    answer2 = "";
    answer3 = "";
    answer4 = "";

    isAns1 = false;
    isAns2 = false;
    isAns3 = false;
    isAns4 = false;

    fourAnswers = 0;

    seconds = 30;

    $("button").css("background-color","cornflowerblue");

    finalCountdown();
    questionLoader();
}

// --- --- --- reset window --- --- ---
$("#resetButton").on("click",function(){
    location.reload;
});