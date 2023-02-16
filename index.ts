import inquirer from 'inquirer'

type ans = {
    UserGuess: number
}
const systemGenerateNo = Math.floor(Math.random() * 10);

const answers: ans = await inquirer.prompt([
    {
        type: "number",
        name: "UserGuess",
        message: "Write Your Guess b/w 1 to 10: "
    }
])

// console.log(answers.UserGuess)

const {UserGuess} = answers

console.log(UserGuess , "user guess" , systemGenerateNo,  "system Generated Number")
if (UserGuess === systemGenerateNo){
    console.log("Yeah Your answer is correct \n you win")

}
else {
    console.log("Please Try Again")
}
