

const QuizState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    NAME: Symbol("name"),
    QUESTION1: Symbol("question1"),
    QUESTION2: Symbol("question2"),
    QUESTION3: Symbol("question3"),
    QUESTION4: Symbol("question4"),
    QUESTION5: Symbol("question5"),
    QUESTION6: Symbol("question6"),
    QUESTION7: Symbol("question7"),
    QUESTION8: Symbol("question8"),
    QUESTION9: Symbol("question9"),
    QUESTION10: Symbol("question10"),
    QUESTION11: Symbol("question11"),
    QUESTION12: Symbol("question12"),
    QUESTION13: Symbol("question13"),
    QUESTION14: Symbol("question14"),
    QUESTION15: Symbol("question15"),
    QUESTION16: Symbol("question16"),
    QUESTION17: Symbol("question17"),
    QUESTION18: Symbol("question18"),
    QUESTION19: Symbol("question19"),
    QUESTION20: Symbol("question20"),
    SCORE: Symbol("score"),
    AGAIN: Symbol("again"),
    ENDING:Symbol("ending")
});

// constants
const WELCOMING_MSG = "Welcome to General Knowledge Quiz! \n May I have your name please?";
const HELLO_MSG = "Hello  ";
const PASS_QUESTION =  "Do you think you can pass this quiz?";
const START_MSG = "Awesome. Let us start !";
const TRY_MSG = "Let us try ! ";
const WELL_DONE_MSG = "Well done !";
const RIGHT_ANSWER_MSG = "Incorrect answer. \n The right answer is: ";
const CONGRATULATIONS = "Congratulations !";
const HARD_LUCK = "Hard Luck !";
const TRY_AGAIN = "Do you want to try again ?";
const YOUR_SCORE_IS = "Your score is : ";
const EXCLAMATION_MARK = " ! ";
const NEW_LINE = "\n";
const PASS_MARK = 10; 

//variables
var nScore = 0;
var sName="";
var sResult_msg ="";

//array to hold questions and the right answers of the quiz.
var sQuiz = [["Question 1: What is the most popular language in the world?","Chinese Language."],
             ["Question 2: Which is the longest river in the world?","Nile River."],
             ["Question 3: Which is the biggest island in the world?","Greenland Island."],
             ["Question 4: What is the national flower of Britain?","Rose Flower."],
             ["Question 5: What is the largest joint in the human body?","Knee."],
             ["Question 6: From what language do French and Spanish come?","Latin."],
             ["Question 7: What is the most commonly broken bone in the human body?","The clavicle."],
             ["Question 8: What percentage of our body energy is used to power the brain?","20. The brain uses 20 percent of all caloric energy."],
             ["Question 9: On average, how many times does the human heart beats each minute?","70. The heart muscle beats an average of 70 times per minute."],
             ["Question 10: What fraction of the human body is made of blood?","1/13. Blood makes up about 1/13 of total weight of the human body."],
             ["Question 11: Which is the largest country in the world?","Russia"],
             ["Question 12: What sensory function do the ears provide other than hearing?","Balance"],
             ["Question 13: How much blood is in the average human body?","5.7 Liters"],
             ["Question 14: How many provinces does Canada have?","10"],
             ["Question 15: Which country is known as land of white elephant?","Thailand"],
             ["Question 16: What does the  (SIM) in SIM card stands for?","Subscriber Identity Module"],
             ["Question 17: What is the smallest bone in the human body","Stapes"],
             ["Question 18: Who founded Apple Computer?","Steve Jobs"],
             ["Question 19: What is the language spoken in Colombia?","Spanish"],
             ["Question 20: What is the language spoken in Cuba?","Spanish"]];
    
//pass function checks if the user passed the quiz or not 
function pass (score){
     if (score >= PASS_MARK)
        return CONGRATULATIONS;
     else
        return HARD_LUCK;
}

export default class Quiz{
    constructor(){
        this.stateCur = QuizState.WELCOMING;
        this.bDone = false;
    }
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){

            case QuizState.WELCOMING:

                 sReply =  WELCOMING_MSG + NEW_LINE;
                 this.stateCur = QuizState.NAME;
                 break;

            case QuizState.NAME:

                 if (isNaN(sInput)){
                      sName = sInput;
                      sReply = (HELLO_MSG + sName + EXCLAMATION_MARK +  NEW_LINE + PASS_QUESTION);
                      this.stateCur = QuizState.QUESTION1;
                 }else{
                      sReply = WELCOMING_MSG;
                      this.stateCur = QuizState.NAME;
                 }
                 break;

            case QuizState.QUESTION1:

                 if(sInput.toLowerCase().match("yes")){
                       sReply = START_MSG + NEW_LINE + sQuiz[0][0];
                 }else{
                       sReply = TRY_MSG + NEW_LINE + sQuiz[0][0] ;
                }
                this.stateCur = QuizState.QUESTION2;
                 break;

            case QuizState.QUESTION2:
                 
                 if(sInput.toLowerCase().match("chinese")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[1][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[0][1] + NEW_LINE + sQuiz[1][0];
                 }
                 this.stateCur = QuizState.QUESTION3;
                 break;

            case QuizState.QUESTION3:
                 
                 if(sInput.toLowerCase().match("nile")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[2][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[1][1] + NEW_LINE + sQuiz[2][0];
                 }
                 this.stateCur = QuizState.QUESTION4;
                 break;

            case QuizState.QUESTION4:
                 
                 if(sInput.toLowerCase().match("greenland")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[3][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[2][1] + NEW_LINE + sQuiz[3][0];
                 }
                 this.stateCur = QuizState.QUESTION5;
                 break;

            case QuizState.QUESTION5:
                 
                 if(sInput.toLowerCase().match("rose")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[4][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[3][1] + NEW_LINE + sQuiz[4][0];
                 }
                 this.stateCur = QuizState.QUESTION6;
                 break;

            case QuizState.QUESTION6:
                 
                 if(sInput.toLowerCase().match("knee")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE +  sQuiz[5][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[4][1] + NEW_LINE + sQuiz[5][0];
                 }
                 this.stateCur = QuizState.QUESTION7;
                 break;

            case QuizState.QUESTION7:
                 
                 if(sInput.toLowerCase().match("latin")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[6][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[5][1] + NEW_LINE + sQuiz[6][0];
                 }
                 this.stateCur = QuizState.QUESTION8;
                 break;

            case QuizState.QUESTION8:
                 
                 if(sInput.toLowerCase().match("clavicle")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[7][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[6][1] + NEW_LINE + sQuiz[7][0];
                 }
                 this.stateCur = QuizState.QUESTION9;
                 break;

            case QuizState.QUESTION9:
                 
                 if(sInput.toLowerCase().match("20")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[8][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[7][1] + NEW_LINE + sQuiz[8][0];
                 }
                 this.stateCur = QuizState.QUESTION10;
                 break;

            case QuizState.QUESTION10:
                 
                 if(sInput.toLowerCase().match("70")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[9][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[8][1] + NEW_LINE + sQuiz[9][0];
                 }
                 this.stateCur = QuizState.QUESTION11;
                 break;
                
            case QuizState.QUESTION11:
                 
                 if(sInput.toLowerCase().match("1/13")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[10][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[9][1] + NEW_LINE + sQuiz[10][0];
                 }
                 this.stateCur = QuizState.QUESTION12;
                 break;

            case QuizState.QUESTION12:
                 
                 if(sInput.toLowerCase().match("russia")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[11][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[10][1] + NEW_LINE + sQuiz[11][0];
                 }
                 this.stateCur = QuizState.QUESTION13;
                 break;

            case QuizState.QUESTION13:
                 
                 if(sInput.toLowerCase().match("balance")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[12][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[11][1] + NEW_LINE + sQuiz[12][0];
                 }
                 this.stateCur = QuizState.QUESTION14;
                 break;

            case QuizState.QUESTION14:
                 
                 if(sInput.toLowerCase().match("5.7")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[13][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[12][1] + NEW_LINE + sQuiz[13][0];
                 }
                 this.stateCur = QuizState.QUESTION15;
                 break;

            case QuizState.QUESTION15:
                 
                 if(sInput.toLowerCase().match("10")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[14][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[13][1] + NEW_LINE + sQuiz[14][0];
                 }
                 this.stateCur = QuizState.QUESTION16;
                 break;

            case QuizState.QUESTION16:
                 
                 if(sInput.toLowerCase().match("thailand")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[15][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[14][1] + NEW_LINE + sQuiz[15][0];
                 }
                 this.stateCur = QuizState.QUESTION17;
                 break;
           
            case QuizState.QUESTION17:
                 
                 if(sInput.toLowerCase().match("subscriber identity module")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[16][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[15][1] + NEW_LINE + sQuiz[16][0];
                 }
                 this.stateCur = QuizState.QUESTION18;
                 break;

            case QuizState.QUESTION18:
                 
                 if(sInput.toLowerCase().match("Stapes")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[17][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[16][1] + NEW_LINE + sQuiz[17][0];
                 }
                 this.stateCur = QuizState.QUESTION19;
                 break;

            case QuizState.QUESTION19:
                 
                 if(sInput.toLowerCase().match("steve jobs")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[18][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[17][1] + NEW_LINE + sQuiz[18][0];
                 }
                 this.stateCur = QuizState.QUESTION20;
                 break;

            case QuizState.QUESTION20:
                 
                 if(sInput.toLowerCase().match("spanish")){
                      nScore +=1;
                      sReply = WELL_DONE_MSG + NEW_LINE + sQuiz[19][0];
                 }else{
                      sReply = RIGHT_ANSWER_MSG + sQuiz[18][1] + NEW_LINE + sQuiz[19][0];
                 }
                 this.stateCur = QuizState.SCORE;
                 break;

            case QuizState.SCORE:
                 
                 if(sInput.toLowerCase().match("spanish")){
                      nScore +=1;
                      sResult_msg = pass (nScore);
                      sReply = WELL_DONE_MSG + NEW_LINE + YOUR_SCORE_IS + nScore + NEW_LINE + sResult_msg + NEW_LINE +TRY_AGAIN ;
                 }else{
                      sResult_msg = pass (nScore);
                      sReply = RIGHT_ANSWER_MSG + sQuiz[19][1] + NEW_LINE +  YOUR_SCORE_IS + nScore + NEW_LINE + sResult_msg + NEW_LINE + TRY_AGAIN ;
                 }
                 this.stateCur = QuizState.AGAIN;
                 break;  

           case QuizState.AGAIN:
                 
                 if (sInput.toLowerCase().match("yes")){
                      sReply = PASS_QUESTION + NEW_LINE;
                      this.stateCur = QuizState.QUESTION1;
                 }else{
                      sReply = "GOOD BYE";
                      this.stateCur = QuizState.ENDING;  
                 }
                 break;

           case QuizState.ENDING:
                 done();
                 break;   
        }
        return([sReply]);
    } 
    done (){
         return this.done
    }
}
//define an object of (Quiz) class
let oQuiz = new Quiz();

//repeat the quiz as long as the object is not destroyed
while (! oQuiz.done()){
     sReply = oQuiz.makeAMove(sInput);
}
