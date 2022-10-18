import { writeFile } from 'fs';
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [names, github] = profileDataArgs;
const generatePage = (userName, githubName) => {
    return `
    <!DOCUTYPE html>
    <html lang='en'>
    <head>
       <meta charset="UTF-8>
       <meta name='veiwport' content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA Compatiible" content="ie=edge">
       <title>Portfolio Demo</title>
    </head>
    
    <body>
    <h1> ${names}</h1>
    <h2> <a href="http://github.com/${github}">GitHub</a></h2> 
    </body>
    </html>
    `;
};

writeFile('index.html', generatePage(names, github), err=>{
if(err) throw err;
console.log(err);
console.log("Portfolio complete! Chcekout index.html to see output");
});