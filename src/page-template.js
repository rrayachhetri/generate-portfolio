module.exports = (name, github) => {
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
    <h1> ${name}</h1>
    <h2> <a href="http://github.com/${github}">GitHub</a></h2> 
    </body>
    </html>
    `;
};
