// const Manager = require("./lib/Manager");
import Manager from "./modules/Manager.mjs";
// const Engineer = require("./lib/Engineer");
import Engineer from "./modules/Engineer.mjs"
// const Intern = require("./lib/Intern");
import Intern from "./modules/Intern.mjs";
import inquirer from "inquirer";
import path from "path";
// const path = require("path");
import fs from "fs";
// const fs = require("fs");
import renderHTML from "./modules/page-template.mjs"

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = []

// Get Manager Function
function managerInput() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "name",
            message: "Please input the Manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please input the Manager's Employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Please input the Manager's Email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please input the Manager's Office Number:"
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        selectionMenu();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}
// Get Engineer
function engineerInput() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "name",
            message: "Please input the Engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please input the Engineer's Employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Please input the Engineer's Email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Please input the Engineer's GitHub username:"
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        team.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        selectionMenu();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}
// Get Intern Function
function internInput() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "name",
            message: "Please input the Intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please input the Intern's Employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Please input the Intern's Email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Please input the Intern's School:"
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        team.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        selectionMenu();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}
// Menu
function selectionMenu() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "menu",
            choices: [{name: "Add an engineer", value: 1}, {name: "Add an intern", value: 2}, {name: "Finish building the team", value: 0}]
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const choiceFunctions = [
            makeHTML,
            engineerInput,
            internInput
        ]
        choiceFunctions[answers.menu]();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}
// Make HTML
function makeHTML() {
    page = renderHTML(team);
    console.log(page);
}
// initilize function
function main() {
    managerInput()
}

main()