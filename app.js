var quizQuestions = [

    // Question 1
    {
        questionText: 'Which of the following foods is not part of the rose family?',
        questionOptions: ['Almonds', 'Apples', 'Strawberries', 'Pomegranate'],
        correctChoice: 3,
        correctDetails: 'The Pomegranate is part of the Lythraceae family, which includes small shrubs and trees that bear fruit.  That\'s right, almonds, apples, and strawberries are all related to the rose flower!'
    },

    // Question 2
    {
        questionText: 'Red food dye is traditionally made from what?',
        questionOptions: ['Beets', 'Insects', 'Flowers', 'Chemicals'],
        correctChoice: 1,
        correctDetails: 'The Cochineal insect has been used to make a vibrant red dye since the 1500s.  Grossed out?  Consider the alternative - other sources of red food dye come from tar!'
    },

    // Question 3
    {
        questionText: 'Honey is made from the nectar of a flower and',
        questionOptions: ['Bee urine', 'Bee feces', 'Bee vomit', 'Bee saliva'],
        correctChoice: 2,
        correctDetails: 'Although some argue it\'s not really "vomit", the bee regurgitates the nectar from its extra stomach into another bee\'s mouth.  This goes back and forth until it is finally regurgitated into a honeycomb.'
    },

    // Question 4
    {
        questionText: 'This vegetable was originally purple instead of the color we know it to be today:',
        questionOptions: ['Tomato', 'Carrot', 'Bell Pepper', 'Cucumber'],
        correctChoice: 1,
        correctDetails: 'You read that right!  Purple carrots were phased out due to their less than pleasant taste, and cultivated with white and yellow varieties of carrots to make the orange ones we know and love today.  You can still find and grow purple carrots, but it is said they don\'t taste as good as the orange varieties.'
    },

    // Question 5
    {
        questionText: 'This food\'s scientific name means "food of the gods":',
        questionOptions: ['Honey', 'Grapes', 'Sugar', 'Chocolate'],
        correctChoice: 3,
        correctDetails: 'The cacao tree\'s scientific name is "Theobroma cacao", literally, "food of the gods".'
    },

    // Question 6
    {
        questionText: 'All of the following foods are fermented before we consume them EXCEPT for:',
        questionOptions: ['Mustard', 'Beer', 'Bread', 'Chocolate'],
        correctChoice: 0,
        correctDetails: 'Mustard is made by combining ground mustard seed, spices, and vinegar.  Although vinegar itself is a fermented food, mustard as a whole is not.'
    },

    // Question 7
    {
        questionText: 'To make whipped cream, the temperature of the cream cannot be higher than:',
        questionOptions: ['40 degrees', '50 degrees', '60 degrees', '70 degrees', ],
        correctChoice: 1,
        correctDetails: 'At temperatures above 50 degrees, the cream you whip will turn into butter instead!'
    },

    // Question 8
    {
        questionText: 'Which of the following food labels is misleading to the consumer?',
        questionOptions: ['Free Range', 'Animal Welfare Approved', 'USDA Certified Organic', 'Certified Humane'],
        correctChoice: 0,
        correctDetails: 'The term "Free Range" indicates that animals have unlimited access to the outdoors.  In reality, the term just refers to animals that are not confined to a cage.  They might still be confined to the indoors, overcrowded with other animals with little to know access to the outdoors.'
    },

    // Question 9
    {
        questionText: 'Refined flour is made from which part of the wheat kernel?',
        questionOptions: ['Endosperm', 'Hull', 'Bran', 'Germ'],
        correctChoice: 0,
        correctDetails: 'When refined flour is made, the hard outer covering (Bran) and the part that sprouts to grow more wheat (Germ) are removed, leaving behind the starchy insides, or the Endosperm.'
    },

    // Question 10
    {
        questionText: 'Which condiment was originally made with fish sauce?',
        questionOptions: ['Mayonnaise', 'Relish', 'Mustard', 'Ketchup'],
        correctChoice: 3,
        correctDetails: 'Ketchup was originally a pickled fish sauce from China, named "ke-tsiap".  The recipe morphed as it moved its way into western countries, where tomatoes eventually became the main ingredient.'
    }
];

var currentQuestionNumber = 0;
var totalNumberQuestions = quizQuestions.length;
var totalCorrectAnswers = 0;

// FUNCTIONS Definitions

//  -Display current question
function displayCurrentQuestion() {

    //get questionText (ID: #currentQuestion)
    $('#currentQuestion').text(quizQuestions[currentQuestionNumber].questionText);

    // Display current question choices (ID: quizQuestionAnswers)
    $('#quizQuestionAnswers').empty();

    // Get total number of choices for current question
    var totalNumberOfChoices = quizQuestions[currentQuestionNumber].questionOptions.length;
    //    console.log(totalNumberOfChoices);

    //Loop through all choices and append them to the quiz quesion answers container (ID: quizQuestionAnswers)
    for (var i = 0; i < totalNumberOfChoices; i++) {

        // loop through answer choices and create a dynamically generated row for each of them
        var buildEachAnswerHTML = `<button role="button" type='submit' class='option' name='option' value='${i}'>${quizQuestions[currentQuestionNumber].questionOptions[i]}</button>`

        //        var buildEachAnswerHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + quizQuestions[currentQuestionNumber].questionOptions[i] + "<br>";
        //        console.log(buildEachAnswerHTML);

        // append row to the choices container in html
        $('#quizQuestionAnswers').append(buildEachAnswerHTML);
    }

    // Display number of current question
    $('#questionTotal').text(`Question ${currentQuestionNumber + 1} / ${totalNumberQuestions}`);

    //CHECK TO SEE IF IT IS CORRECT//
    $('#questionNumberCorrect').text(`You answered ${totalCorrectAnswers} out of ${totalNumberQuestions} correctly!`);
}


// FUNCTIONS USAGE (Triggers)


// START QUIZ

$(document).ready(function () {

    //Hide sections not being used (CLASS: .quiz-section, .results-page)
    $('.quiz-section').hide();
    $('.results-page').hide();

    //START:

    //  - Activate Start Quiz button (ID: #startQuizButton) and show first question
    $('#startQuizButton').click(function () {
        // -On click, hide .start-quiz
        $('.start-quiz').hide();
        $('.results-page').hide();
        $('.quiz-section').show();
        $('#result_msg').empty();

        //        console.log(currentQuestion);

        // -move to Question 1 section (CLASS: .quiz-section)
        displayCurrentQuestion();

    })


    //QUIZ SECTION - Show quiz questions
    $('.quiz-section').on('click', '.option', function () {

        //hide other containers
        $('.start-quiz').hide();
        $('.results-page').hide();
        $('.quiz-section').show();


        // get the question answer from the user
        var userAnswer = $(this).val();
        //        console.log(userAnswer);

        // get the correct answer from the quizQuestions array
        var rightAnswer = quizQuestions[currentQuestionNumber].correctChoice;
        //        console.log(rightAnswer);

        // compare the user answer with correct answer

        //        console.log(userAnswer);
        if (userAnswer == rightAnswer) {
            // increment total number of correect answers if correct
            totalCorrectAnswers++;
            //            console.log(totalCorrectAnswers);

        }

        $('#result-msg').append(`<h3 class="correctQuestion">Question: ${quizQuestions[currentQuestionNumber].questionText} </h3>`);
        $('#result-msg').append(`<p class="answer-explanation">Your answer: ${quizQuestions[currentQuestionNumber].questionOptions[userAnswer]}</p>`);
        $('#result-msg').append(`<p class="answer-explanation">Correct answer: ${quizQuestions[currentQuestionNumber].questionOptions[rightAnswer]}</p>`);
        $('#result-msg').append(`<h4 class="correctAnswer">Explanation: ${quizQuestions[currentQuestionNumber].correctDetails}</h4>`);

        // if quiz is finished, show results-section
        if (currentQuestionNumber + 1 == totalNumberQuestions) {

            //hide other containers
            $('.start-quiz').hide();
            $('.quiz-section').hide();
            $('.results-page').show();

            //show the final score
            $('#quizFinalTotal').text(`You got ${totalCorrectAnswers} out of ${totalNumberQuestions} correct!`);

            // Display message depending on how many were correct

            if (3 < totalCorrectAnswers < 7) {
                $("#howYouDid").text('Not bad!');
            }

            if (totalCorrectAnswers < 4) {
                $("#howYouDid").text('Check out the answers below and try again!');
            }

            if (totalCorrectAnswers >= 7) {
                $("#howYouDid").text('Awesome!  You know your food!');
            };

        }

        // else continue to the next question
        else {
            //increment the question number
            currentQuestionNumber++;
            //display the following question
            //            console.log(displayCurrentQuestion());
            displayCurrentQuestion();
        }
    });

    //  -Activate Take It Again button (ID: #retryButton)
    $('.results-page').on('click', '#retryButton', function () {
        //        alert("you hit the retry button!");
        $('.quiz-section').hide();
        $('.results-page').hide();
        $('.start-quiz').show();

        //reset variables
        currentQuestionNumber = 0;
        totalCorrectAnswers = 0;
    });
});
