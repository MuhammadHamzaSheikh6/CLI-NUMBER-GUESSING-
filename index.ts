#! /usr/bin/env node
import inquirer from "inquirer"
//1) computer will generta a ramdom number-DONE
//2) user input for guessing number-DONE
//3) campair user input with computer generated number and show result-DONE
const ramdomnumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",

        type: "number",

        message: "Please Guess a number between 1 to 5"
        
    }
])

if(answer.userGuessedNumber===ramdomnumber)
    {console.log("Congratulation! You Guessed Right Number.")} 
else {console.log("You Guessed wronge number")}