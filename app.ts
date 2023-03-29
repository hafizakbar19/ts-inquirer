import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "What is your age:"

}])
console.log(chalk.blue(`insha Allah after ${60 - answer.age} years, your age will be 60 years.`));