var inquirer = require('inquirer');

console.log("Welcome to Team Generator Template!");

inquirer
  .prompt([
    {
        name : 'role',
        message : 'What job position will you be adding?'
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