
import inquirer from 'inquirer';

inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
]).then(answers=> console.log(answers))

// const fs = require('fs');
// const generatePage = require('./src/page-template.js')
// we are not using process.argv anymore because we installed inquirer  to do the same task

// const pageHtml = generatePage(name, github);
// fs.writeFile('index.html', pageHtml, err => {
//     if (err) throw new Error(err);
//     console.log("Portfolio complete! Checkout index.html to see output");
// });
