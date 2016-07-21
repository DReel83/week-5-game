


<script type="text/javascript">
	
//object containing questions, choices, and answers.

var quiz = [
{
    "Question": "What is printed on the license plate of the time traveling Delorean?",
    "Choices": ["SCIENCE", "TIMETRVL", "OUTATIME", "TIME2GO"],
    "Answer": "OUTATIME"

},
{
    "Question": "In the first Back to the Future movie, which shopping mall does Marty meet Doc at?",
    "Choices": ["Big Fur", "Twin Pines", "Wild Oak", "Hill Valley"]
    "Answer": "Twin Pines"
},
{
    "Question": "What date does Doc take Marty and Jennifer to in BTTF 2?"
    "Choices": ["Sept. 22nd, 2015", "Nov. 8th, 2015", "Dec. 1st, 2015", "Oct. 21st, 2015"]
    "Answer": "Oct 21st, 2015"
},
{
    "Question": "What is the name of the cafe Marty is suppose to meet Griff at in 2015? "
    "Choices": ["Cafe Future", "Cafe 80's", "Space Age Cafe", "Jigowatt Cafe"]
    "Answer": "Cafe 80's"
},
{
    "Question": "What does Biff run into with his car after chasing Marty around the Hill Valley square? "
    "Choices": ["Manure", "Garbage", "Dirt", "Mr. Strictland's car"]
    "Answer": "Manure"
},
{
    "Question": "How much electricity is require to power the Flux Capacitor (which makes time travel possible)?"
    "Choices": ["1.21 milliwatts", "1.21 terrawatts", "1.21 jigowatts", "1.21 gigawatts"]
    "Answer": "1.21 jigowatts"
},
{
    "Question": "What the hell is a jigowatt?"
    "Choices": ["I don't know.", "I don't care", "A jigowatt is really a gigawatt that was mispelled, and mispronounced by the movie's producers Robert Zemeckis and Bob Gale.", "1 billion watts."]
    "Answer": "A jigowatt is really a gigawatt that was mispelled, and mispronounced by the movie's producers Robert Zemeckis and Bob Gale."
},
{
    "Question": "What is Doc Brown's dog's name in the year 1955?"
    "Choices": [ "Einstien", "Galalleo", "Newton", "Capurnicus"]
    "Answer": "Capurnicus"
},
{
    "Question": "What is the name of George McFly's book at the end of the first movie?"
    "Choices": ["An Alien Named Darth", "A Match Made In Time", "A Match Made In Space", "My Homework, Your Handwriting"]
    "Answer": "A Match Made In Space"
},
{
    "Question": "Who was originally cast to play the role of Marty McFly?"
    "Choices": ["Crispin Glover", "Eric Stoltz", "Robert Downey Jr.", "Tom Criuse"]
    "Answer": "Eric Stoltz"
}
]


var currentQuestion = 0;
var correctAnswers = 0;
var quizEnd = false;

$(document).ready(function () {

//This displays the first question.
    displayCurrentQuestion();
    $(this).find('#message').hide();

//Clicking next displays the next question.
    $(this).find('#nextButton').on('click', function () {


        if (!quizEnd) {

            value = $('input[type="radio"]:checked').val();

            if(value == undefined) {
                $(document).find('#message').text("Do have any idea what would happen if I turned <i>my</i> homework in <i>your</i> handwriting? (Please make a selection)")

                $(document).find('#message').show();

            } else {

            //If a message is displayed this should remove it.
                $(document).find('#message').hide();

            if (value == quiz[currentQuestion].correctAnswers) {
                correctAnswers++;
            }

            currentQuestion++;

            if (currentQuestion < quiz.length) {
                displayCurrentQuestion

            } else {
                displayScore();

                //This changes the text in the 'Next' button
                //to ask the player is they want to go again.
                $(document).find('#nextButton').text('Great Scott! Let\'s go again.');
                quizEnd = true;
               } 
            }

        } else {

            // This resets the games so the play can start again.
            quizEnd = false;
            $(document).find('#nextButton').text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
            }

        });
    });

//This displays the current question as well as the choices for that question.
function displayCurrentQuestion() {
    console.log('display current question')

    var question = question[currentQuestion].question;
    var questionClass = $(document).find('.panel-body' > '#currentQuestion');
    var choices  = $(document).find('.panel-body' > '#choices');
    var numChoices = quiz[currentQuestion].choices.length;
    
    // Sets the question to cuurent question
    $(questionClass).text(question);

    //removes any list elements
    $(choices).find('li').remove();

    //displays cloices
    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = quiz[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + 'name="dynradio" />' + 
            choice + '<li>').appendTo(choices);

    }
}

// Resets Quiz
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

//Displays score at end of game.
function displayScore() {
    $(document).find('.panel-body' > '#score').text("You scored " + 
        correctAnswers + "out of: " + quiz.length);
    $(document).find('panel-body' > '#score').show();
}

// Hides score during game
function hideScore() {
    $(document).find('#score').hide();
}

//Quiz timer
var n = 30;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   document.getElementById("#timer")innerHTML = (n);
}



</script>