const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//–-------------------------

const teamArr = [];

const quesManager = [
    {
        type: "input",
        message: "Whats is the manager's name",
        name: "name"
    },
    {
        type: "input",
        message: "Whats is your ID?",
        name: "id"

    },
    {
        type: "input",
        message: "Whats is your email?",
        name: "email"
    },
    {
    type: "input",
        message: "Whats is your office number?",
        name: "officeNumber"

    }

];

const quesEngineer = [
    {
        type: "input",
        message: "What is engineer's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id"
      },
      // {
      //   type: "input",
      //   message: "What is your role?",
      //   name: "role"
      // },
      {
        type: "input",
        message: "What is your Email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "github"
      }
    ];
    
    const quesIntern = [
      {
        type: "input",
        message: "What is intern's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is intern's ID?",
        name: "id"
      },
      // {
      //   type: "input",
      //   message: "What is your role?",
      //   name: "role"
      // },
      {
        type: "input",
        message: "What is intern's Email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is intern's school?",
        name: "school"
      }
    ];
    

//---- prompt
function promptManager() {
    inquirer
      .prompt(quesManager)
      .then(function (input) {
        console.log("manager");
        //if manager? const manager = new Manager(input.name, input.id ....)
        // if ( username === Manager) {
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
        teamArr.push(manager);

        createTeam();
      });
  }

function promptEngineer() {
    inquirer
    .prompt(quesEngineer)
    .then(function (input) {
        console.log("manager");

        const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
        teamArr.push(manager);

        createTeam();
    });
}
function promptIntern() {
    inquirer
      .prompt(quesIntern)
      .then(function (input) {

        const intern = new Intern(input.name, input.id, input.email, input.school);
        teamArr.push(intern);

        createTeam();
      });
  }

  //----createTeam

  function createTeam() {

    const createTeamMember = [
        {
            type: "list",
        message: "Which member do you want to add?",
        name: "role",
        choices: [
          "Engineer",
          "Intern",
          "Finish Create Team" // This ends adding team member/
        ]
      }];

            
    ]
  }