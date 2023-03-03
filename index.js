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
import render from "./modules/page-template.mjs"

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = {}

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Get Manager Function

// Get Intern Function

// Get Engineer

// Render Menu

// Make HTML
