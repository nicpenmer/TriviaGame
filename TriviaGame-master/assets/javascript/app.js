$(document).ready(function () {


    $("#afterSubmit").hide();

    //start function not working

    clockRunning = false;
    function startGame(startGame) {
        console.log("startGame")
        //function to check the :bottoms up button"
        var setInterval;
        //set timer to start when "start" clicked.
        $("#time").text("Time Remaining: 02:00");
        //append this image to the div of shaker shaking while countdown goes. 
        $("#timer").append("<img id='shakerTimer'src=assets/images/shaker.gif>")

    }
    $("#start").on("click", timer.start, function () {
       startGame();


        // countdown timer

        function MyTimer(val) {
            val = val || 120;
            var timer = setInterval(function () {
                if (val-- <= 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
        new MyTimer(function (val) {
            var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
            document.getElementById("timer").textContent = timerMsg;
        });

        //

        $("#button2").click(function () {
            $("afterSubmit").show();
        });
        function check() {

            //set variables to question values

            var questions = ["question1", "question2", "question3", "question4", "question5", "question6"];
            console.log(questions);

            // make a for loop to cycle through questions, displaying one at a time... 
            for (i = 0; i < quesitons.length; i++) {
                //display one question at a time//
            }

            var question1 = document.quiz.question1.value;
            var question2 = document.quiz.question2.value;
            var question3 = document.quiz.question3.value;
            var question4 = document.quiz.question4.value;
            var question5 = document.quiz.question5.value;
            var question6 = document.quiz.question6.value;


            //variable to keep track of correct answers
            var correct = 0;
            //correct answers
            if (question1 == "Manhattan") {
                correct++;
            }
            if (question2 === "Mojito") {
                correct++;
            }
            if (question3 === "Negroni") {
                correct++;
            }
            if (question4 === "Margarita") {
                correct++;
            }
            if (question5 === "Gimlet") {
                correct++;
            }
            if (question6 === "OldFashioned") {
                correct++;
            }
            console.log(correct);
            //keep hidden until submit. 
            function remove() {

                $("afterSubmit").show();


                //score options. 
                var messages = ["Booze Hound: You really know your cocktails.", "Moderate drinker: you know some of them", "Try harder, heres a drink."];
                var pictures = ["assets/images/drinksmost.gif", "assets/images/moderate.gif", "assets/images/drinkmore.gif"];
                var score;

                if (correct < 1) {
                    score = 2;
                }

                if (correct > 0 && correct < 5) {
                    score = 1;
                }

                if (correct > 5) {
                    score = 0;
                }
                return;
                console.log(score);
                //things to insert into the dom when the score is counted. 
                document.getElementById("Message").innerHTML = message[score];
                document.getElementById("numberCorrect").innerHTML = "You got " + correct + "correct.";
                document.getElementById("picture").src = pictures[score];
            }
            remove();

        }
    })
})

// not all the parts are functioning yet. but Im close. 