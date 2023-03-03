# Bootcamp Challenge 12 - Team Profile Generator

![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description

An app to make a HTML page describing a software development team. The page is developed using test driven development.

The project had the following requirements:

- A command line interface that accept user input to create the webpage.

- A prompt interface gives options to the user.

- A user enters the name, employee id, email address and office number.

- The user gets a prompt to enter more members of the team, or finish building the team.

- When the engineer option is selected, the following information is taken: Engineer, ID, Email, GitHub.

- When the intern option is selected, the following information is taken: Intern's name, ID, Email, School.

- When the prompt questions are finished, a page is generated.

- Employees have a class with a name, id, email properties and functions for getName, getId, getEmail and getRole that returns Employee.

- A Manager class will be included that extends Employees that also has the officeNumber property. The getRole() property returns manager.

- An Engineer class will also be included, that extends Employees. It will also have github and getGithub property. The getRole property will return Engineer.

- Validation on inputs

## Table of Contents

- [Description](#description)

- [Table of Contents](#table-of-contents)

- [Installation](#installation)

- [Usage](#usage)

- [Features](#features)

- [Credits](#credits)

- [License](#license)

- [Questions](#questions)

## Installation

Node.js must be installed for this project. See the link in the credits section to see how to install it. With it installed, open a terminal in the root of the cloned project. Use "npm install"  to install the dependencies. Then run "node index.js" to run the project.

## Usage

A screenshot of the project can be seen below:

![Screenshot](.assets/images/screenshot.png)

Follow the installation steps above. Then run "node index.js" in a terminal on the root of the folder to run the project. Answer the questions to build the team. A HTML page will be output.

## Features

This project has the following features:

- Node.js command line interface

- Modules

## Tests

The project has the following tests:

- Jest tests run on a pull request or update to main.

- There is a set of tests for Employee.mjs

- There is a set of tests for Engineer.mjs

- There is a set of tests for Intern.mjs

- There is a set of tests for Manager.mjs

## Credits

The following resources were important for this project.

- [Readme Generator](https://github.com/bowseruk/readme-generator-nodejs) for generating the readme.

- This project was based on a challenge by edX Boot Camps LLC.

- [W3School](https://www.w3schools.com/) was used as a reference for elements to use and good practice.

- [MDN](https://developer.mozilla.org/en-US/) is a very comprehensive and useful resource.

- [Stack Overflow](https://stackoverflow.com/) always seems to have the answer to a problem that occurs.

- The [Inquirer](https://www.npmjs.com/package/inquirer) package was used with node.js, following the documentation.

- [Node.js](https://nodejs.org/) was used in the project, following documentation from their site.

- [Jest.js](https://jestjs.io/) was used as a testing framework for the project, following documentation from their site.

## License

![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

This full license used by the project is in the LICENSE file of the repo.

## Questions

Please contact me with any questions by:

- Github Discussion: Add a discussion or raise an issue on this repo.

- My Github Username is [BowserUK](https://github.com/bowseruk): Feel free to find more contact details or browse my other Repos.
