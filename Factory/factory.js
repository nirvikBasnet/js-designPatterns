//factory - obj that creates or manifactures more objects
// why not use new key - centralized location, no new everywhere, clean code

//Scenario - Dev & Testers - DB to keep track of employees

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}
function Tester(name) {
  this.name = name;
  this.type = "Tester";
}
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

//testing
function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

//usages
const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("Jack", 2));

employees.forEach((emp) => {
  say.call(emp);
});
