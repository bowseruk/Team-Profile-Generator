// Import the employee class to extend.
import Employee from "./Employee.mjs";
// This class describes an engineer.
export default class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager"
    }
}