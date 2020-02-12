const fs = require('fs');

const util = require('util');

const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile);

console.log("Welcome to Team Generator Template!");

function promptUser() {

inquirer.prompt([
    {
        type : 'list', 
        name : 'role',
        message : 'What job position will you be adding?',
        choices : ['Manager','Engineer','Intern']
    },
    {
        type : 'input',
        name : 'name',
        message : 'What is your name?'
    },
    {
        type : 'input',
        name : 'email',
        message: 'What is your email address?'
    },
    {
        type : 'input',
        name : 'office',
        message: 'What is your office number?'
    }
  ])

}

function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
        
        <style>
            .header{
                background-color: red;
                color: white;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 25px;
                text-align: center;
            }
            .card-title{
                text-align: center;
            }
            .card{
                border: 2px solid blue;
                background-color: wheat;
            }
    
        </style>
        <title>Coding Staff</title>
    </head>
    <body>
        <div class="container">
    
            <div class="row">
    
                <div class="col-md-12 header">
    
                    My Team
    
                </div>
    
            </div>
    
            <div class="row">
    
                <div class="card" style="width: 18rem;">
    
                    <div class="card-body">
    
                      <h5 class="card-title  cht">Manager</h5>
    
                      <div class="card" style="width: 15.5rem;">
    
                        <ul class="list-group list-group-flush">
    
                          <strong><li class="list-group-item name" style="background-color: whitesmoke;">${answers.name}</li></strong>
    
                          <li class="list-group-item id" style="background-color: whitesmoke;">${answers.role}</li>
    
                          <li class="list-group-item email" style="background-color: whitesmoke;">${answers.email}</li>
    
                          <li class="list-group-item office" style="background-color: whitesmoke;">${answers.office}</li>
    
                        </ul>
    
                      </div>
                      
                    </div>
                    
                  </div>
    
            </div>
    
        </div>
    
        <script src="./javascript/manager.js"></script>
    </body>
    </html>`;
}


   
 promptUser()
 .then(answers => {

     const html = generateHTML(answers);

     return writeFileAsync('index.html', html);

 }).then(function(){

     console.log("You have successfully updated you webpage!");

 }).catch(function(err){

     console.log(err);

 });
 