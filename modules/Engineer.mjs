// Import the employee class to extend.
import Employee from "./Employee.mjs";
// This class describes an engineer.
export default class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}