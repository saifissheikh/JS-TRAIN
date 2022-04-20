
(function() {
    var Question = function(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.answer.length; i++ ) {
            console.log(i + ' : ' +  this.answer[i]);
        }
    
    };
    
    Question.prototype.checkAnswer = function(ans, callBack) {
        var sc;
        if(ans === this.correct) {
            console.log('Correct Answer!');
            sc = callBack(true);
        } else {
            console.log('Wrong Answer, try again');
            sc = callBack(false);
        }
        this.displayScore(sc)
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your Current Score is : ' + score);
        console.log('------------------------------------------');
    }
    
    var q1 = new Question('Is JS the Coolest programming language ?', ['yes', 'no'], 0);
    var q2 = new Question('Whats the captial of India ?', ['Delhi', 'Mumbai', 'Bengaluru'], 0);
    var q3 = new Question('Which framework do you prefer?', ['VueJS', 'Angular', 'React'], 1);

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();
    
    function nextQuestion() {
        var questions = [q1, q2, q3];
    
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();
        
        
        var answer = prompt('Please select the correct answer');
        

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();
    
