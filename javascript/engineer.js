var inquirer = require('inquirer');

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

    console.log(answers.role);
    console.log(answers.name);
    console.log(answers.email);
    
  });