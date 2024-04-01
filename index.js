#!/usr/bin/env node
//todo list in typescript
console.log(chalk.blue.bold.underline('\n\t\tTO DO APP\t\t\n'));
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("Add your To Do List"));
//User variable
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todoitem",
            type: "input",
            message: 'what you want to add in your todos'
        },
        {
            name: "addMore",
            type: "list",
            choices: ["yes", "no"]
        }
    ]);
    //output of program
    const { Todoitem, addMore } = input;
    todos.push(Todoitem);
    if (addMore == "no") {
        console.log(chalk.yellow.bold.underline("\n\t\tYour Todo list Is:\t\t\n"));
        //add more item
        for (let i = 0; i < todos.length; i++) {
            console.log("_" + todos[i]);
        }
        console.log(chalk.green.bold.underline("\n\t\tThank you For Using TODO App\t\t\n"));
        //exit loop
        break;
    }
}
