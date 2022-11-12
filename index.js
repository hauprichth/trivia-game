let allQuestions = [
    {   question: "What is the most common surname in the United States?",
        answers:["Smith", "Jones", "White", "Johnson"],
        correctAnswer:"Smith"
        },
    {   question: "What company was originally called Cadabra?",
        answers:["Apple", "Amazon", "Tesla", "Spotify"],
        correctAnswer: "Amazon"
        },
    {   question: "Compared to their body weight, what animal is the strongest?",
        answers:["Elephant", "Cow", "Dung Beetle", "Ant"],
        correctAnswer:"Dung Beetle"
        },
    {   question:"In Australia, what is comonly known as a Bottle-o?",
        answers:["Ring Toss", "Beer", "Liquor Store", "A Shot of Booze"],
        correctAnswer:"Liquor Store"
        },
    {   question:"What is the national sport of Japan?",
        answers:["Jukoda", "Sumo Wrestling", "Formula 1 Racing", "Golf"],
        correctAnswer:"Sumo Wrestling"
        },
    {   question:"Where did sushi originate from?",
        answers:["Indonesia", "China", "Japan", "Vietnam"],
        correctAnswer:"China"
        },
    {   question:"What country drinks the most coffee?",
        answers:["Brazil", "Ethiopia", "United States", "Findland"],
        correctAnswer:"Findland"
         },
    {   question:"On what continent would you find the largest desert?",
        answers:["Africa", "Antartica", "Oceania", "North America"],
        correctAnswer:"Antartica"
        },
    {   question:"What is the busiest airport in the United States?",
        answers:["LAX", "JFK", "ATL", "LAG"],
        correctAnswer:"ATL"
        },
    {   question:"Where is the strongest human muscle located?",
        answers:["Mouth", "Leg", "Jaw", "Back"],
        correctAnswer:"Jaw"
        },
    {   question:"What disease was commonly spread on pirate ships?",
        answers:["Scurvy", "Smallpox", "Cholera", "Typhus"],
        correctAnswer:"Scurvy"
        },
    {   question:"Aureolin is a shade of what color?",
        answers:["Blue", "Red", "Yellow", "Green"],
        correctAnswer:"Yellow"
        },
    {   question:"What development studio created the Red Dead Redemption game series?",
        answers:["Bungie", "Rockstar Games", "Activision Blizzard", "Naughty Dog Inc"],
        correctAnswer:"Rockstar Games"
        },
    {   question:"Ronald Amundsen was the first man to reach the South Pole, but where was he from?",
        answers:["Findland", "Sweden", "Estonia", "Norway"],
        correctAnswer:"Norway"
        },
    {   question:"Who was the Greek god of wine and pleasure?",
        answers:["Hephaestus", "Hera", "Dionysus", "Demeter"],
        correctAnswer:"Dionysus"
        },
    {   question:"In what country would you find Mount Fuji?",
        answers:["Japan", "Tanzania", "Botswana", "Myanmar"],
        correctAnswer: "Japan"
        },
    {   question:"How many bones does a horse have?",
        answers:["206", "205", "215", "200"],
        correctAnswer:"205"
        },
    {   question:"In what country is the Chernobyl Nuclear Plant located?",
        answers:["Russia", "Uzbekistan", "Latvia", "Ukraine"],
        correctAnswer:"Ukraine"
        },
    {   question:"What Roman emperor famously played the violin while Rome burned?",
        answers:["Nero", "Titus", "Caesar", "Caligula"],
        correctAnswer:"Nero"
        },
    {  question:"Halloween originated as an ancient _____ festival.",
        answers:["English", "Irish", "Greek", "Scandinavian"],
        correctAnswer:"Irish"
        }
];
let currentQuestionIndex = 0;
let currentScore = 0; 
function pullQuestion(){return allQuestions[currentQuestionIndex];
}

function renderQuestion() {
        let questionElement = document.getElementById('question');
        let questionObject = pullQuestion();
         questionElement.innerHTML = questionObject.question;
        let answer1 = document.getElementById('answer1');
         let answer2 = document.getElementById('answer2');
        let answer3 = document.getElementById('answer3');
        let answer4 = document.getElementById('answer4');
         answer1.innerHTML = questionObject.answers[0];
        answer2.innerHTML = questionObject.answers[1];
         answer3.innerHTML = questionObject.answers[2];
        answer4.innerHTML = questionObject.answers[3];
        correctAnswer.innerHTML= ' ';
    };
function showScore(){
        let scoreCard = document.getElementById('currentScore');
        scoreCard.innerHTML = 'Current Score:' + currentScore;
    }
function answerQuestion(answerIndex){
    let questionObject = pullQuestion();
    let selectedAnswer = questionObject.answers[answerIndex];
    let correctAnswer = questionObject.correctAnswer;
    let winner = document.getElementById('correctAnswer');
      winner.innerHTML = 'Correct Answer:' + correctAnswer;
      if(selectedAnswer === correctAnswer) {currentScore+=100;}
    showScore();
}
 renderQuestion();
 function nextQuestion(){ 
    currentQuestionIndex++;
    renderQuestion();
}