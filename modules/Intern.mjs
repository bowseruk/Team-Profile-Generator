// Import the employee class to extend.
import Employee from "./Employee.mjs";
// This class describes an engineer.
export default class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
}