var readlineSync = require('readline-sync');

const chalk = require('chalk');

console.log(chalk.yellow.bold('\nWElCOME TO NARUTO QUIZ\n'))

let yourName = readlineSync.question(chalk.cyan.bold('What do I call you Pal? \n'));
console.log(chalk.blue.bold(`\nWELCOME! MR.${yourName}\n`));

var score = 0;
let questions = [{
  qun:' 1. How old was Naruto in the original Naruto? ',
   a: ' a. 10',
   b: ' b. 12',
   c: ' c. 13',
   d: ' d. 15',
   rightAns: 'b' 
},{
  qun:' 2. Which Hokage sealed the nine-tailed fox inside Naruto? ',
   a: ' a. second Hokage',
   b: ' b. first Hokage',
   c: ' c. third Hokage',
   d: ' d. fourth Hokage',
   rightAns: 'd' 
},{
  qun:' 3. Which character can only use taijutsu? ',
   a: ' a. Sasuke Uchiha',
   b: ' b. Naaruto Uzumaki',
   c: ' c. Rock Lee',
   d: ' d. Gaara',
   rightAns: 'c' 
},{
  qun:' 4. Sasukes goal is gain enough power to kill whom? ',
   a: ' a.  Naruto Uzumaki',
   b: ' b. Itachi Uchiha',
   c: ' c. Neji Hyuuga',
   d: ' d. The Third Hokage',
   rightAns: 'b'
},{
  qun:' 5. What does "Chidori" mean?',
   a: ' a. five hundred punches',
   b: ' b. ten thousand stones  ',
   c: ' c. one thousand birds',
   d: ' d. five thousand swords',
   rightAns: 'd'
}];


  let userHighScore = {
    yourScore :0
  }

function playQuiz(){
  var ask = readlineSync.question(`Would you like to play,${(chalk.yellow.bold(` NARUTO QUIZ.`))}[y/n]\n`)
  var yourAns = ask;
  if(yourAns === "y"){
    console.log(`\nThat's Great! \n`)
    console.log(chalk.blue.bold('RULES FOR THE GAME\n'))
    console.log('# All question are compulsory to attend')
    console.log('# Total number of question is 5')
    console.log('# Each right answer will give you 3 point and wrong answer take 1 point from it.\n')
    console.log(chalk.cyan.bold('Good Luck!!\n'))


      function askQuestion(){
        for(i=0; i<questions.length; i++){
        //   let currentQuiz = questions[i].qun;
        //   let optionA = questions[i].a;
        //   let optionB = questions[i].b;
        //   let optionC = questions[i].c;
        //   let optionD = questions[i].d;
        //   Now show question to user
        console.log(chalk.yellow(`${questions[i].qun} \n`));
        console.log(questions[i].a);
        console.log(questions[i].b);
        console.log(questions[i].c);
        console.log(questions[i].d);
        var yourAnswer = readlineSync.question(chalk.red(`\nEnter Option \n`));
          if(yourAnswer.toLowerCase() === questions[i].rightAns){
            score = score + 3;
            console.log(chalk.green(`\nWOW! You are right. \nyour score is ${score}\n`))
          }else{
            score = score - 1;
            console.log(chalk.red(`\nOhh! you are worng \n`))
            console.log(chalk.green(`Correct ans is ${questions[i].rightAns}`))
            console.log(chalk.cyan(`\nyour score is ${score}\n`));    }
        }
        console.log(`\nThanks for playing mate\n`)
        
      }
       askQuestion();
       scoreTable();

  }else{
    console.log(`\nThank you!! MR.${yourName}\n`)
    
  }

}
playQuiz();


function scoreTable(){
  if(score > userHighScore.yourScore){
    console.log(`\nCongratulations! MR.${yourName}. your score is ${score}\n Now! you are the top player of the NARUTO QUIZ\n`)
  }else{
    console.log(`\nBetter Luck Next Time! Have a great day! ${yourName}\n your Score is ${score}`)
  }
}