var inquirer = require('inquirer');

let employee = {};

console.log("Welcome to Team Generator Template!");

 inquirer
  .prompt([
    {
        type : 'list', 
        name : 'role',
        message : 'What job position will you be adding?',
        choices : ['Manager','Engineer','Intern']
    },
    {
        name : 'name',
        message : 'What is your name?'
    },
    {
        name : 'email',
        message: 'What is your email address?'
    }
  ])
  .then(answers => {


    console.log(answers);
  
      
    if (answers.role == "Intern"){

        inquirer.prompt([

            {
                type: 'list',
                name : 'school',
                message : 'What kind of schooling has the new Intern attended',
                choices : ['No School','2 Year','4 Year','Bootcamp','Self Taught']
            }

        ]).then(answers => {


            const schooling = answers.school;

            console.log(schooling);
        })

      }

  });