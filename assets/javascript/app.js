//buttons
//start button
$('#startButton').on('click', function() {
    game.start();
})
//submit button
$(document).on('click', '#submit', function() {
    game.done();
})
//reset button
$(document).on('click', '#reset', function() {
    location.reload();
})


//rock n roll questions object
var questions = [{
//question 1
    question: "Who is the only 3 time inductee into the Rock n Roll Hall of Fame?",
    answers: [" Eric Clapton ", " Slash ", " John Lennon ", " Marky Mark "],
    correctAnswer: " Eric Clapton ",
}, {
//question 2
    question: "Which member of the Beatles is not in the Rock n Roll Hall of Fame?",
    answers: [" John Lennon ", " George Harrison ", " Ringo Starr ", " Paul Mccartney "],
    correctAnswer: " Ringo Starr ",
}, {
//question 3
    question: "Who is Pearl Jam's #1 fan?",
    answers: [" Fred ", " Paul ", " Jeff ", " Eddie "],
    correctAnswer: " Jeff "
}, {
//question 4   
    question: "Who would win in a street fight?",
    answers: [" Axel Rose ", " Kurt Cobain "],
    correctAnswer: " Kurt Cobain ",
}, {
//question 5
    question: "Which band was NOT a part of the British Invasion",
    answers: [" The Beatles ", " The Who ", " The Rolling Stones ", " Kiss "],
    correctAnswer: " Kiss ",
}, {
//question 6
    question: "Who was the first woman elected to the Rock and Roll Hall of Fame?",
    answers: [" Diana Ross ", " Aretha Franklin ", " Tina Turner ", " Janis Joplin "],
    correctAnswer: " Aretha Franklin "
}];

//game logic opject
//counter
var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    
//counter function
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },
//questions load after hitting start button    
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $('.time').prepend('<h2>Time Remaining: <span id="counter"> 90</span> Seconds</h2>');
        $(".start-button").remove();
        for (var i = 0; i < questions.length; i++) {
            $('.questions').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $(".questions").append("<input type='radio' name='question-" + i + "'value ='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $(".questions").append('<br><br><button class="btn btn-secondary btn-md" id="submit">Submit</button>');

    },
//checking for correct answers 
    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
                if ($(this).val() == questions[0].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-1']:checked"), function() {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-2']:checked"), function() {
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-3']:checked"), function() {
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-4']:checked"), function() {
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),

            $.each($("input[name='question-5']:checked"), function() {
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

        this.results();
    },

//display results
	results: function() {
        clearInterval(timer);
        $('.questions').remove();
        $('.time').remove();
        $('.results').append("<h3>Correct: " + this.correct + "</h3>");
        $('.results').append("<h3>Incorrect: " + this.incorrect + "</h3>");
        $('.results').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    //created button manually after results are displayed    
        $(".results").append('<br><button class="btn btn-secondary btn-md" id="reset">RESET</button>');

    }
}
