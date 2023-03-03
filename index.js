// import custom modules
import Manager from "./modules/Manager.mjs";
import Engineer from "./modules/Engineer.mjs"
import Intern from "./modules/Intern.mjs";
import TeamHTML from "./modules/TeamHTML.mjs";
// import libraries
import inquirer from "inquirer";
import fs from "fs";
import util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);
// team array
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
// function to write README file
async function writeToFile(fileName, data) {
    try {
        await writeFileAsync(fileName, data);
    } catch (err) {
        console.log(err);
    }
}
// Make HTML
async function makeHTML() {
    // Create page
    let page = new TeamHTML(team).html;
    // write to file
    await writeToFile("output/team.html", page);
}
// initilize function
function main() {
    managerInput()
}
// Start logic
main()