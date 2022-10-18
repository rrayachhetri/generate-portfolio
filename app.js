import inquirer from 'inquirer';
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is you name? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter your name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username(Required)',
            validate: userName => {
                if(userName){
                    return true;
                } else {
                    console.log("Please Enter GitHub username");
                    return false
                }
            }

        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => {
                if(confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};
const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
     ======================    
    Add a new Project
    ======================
   `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?(Required)',
            validate: nameProject => {
                if(nameProject) {
                    return true;
                } else {
                    console.log('Please enter Project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescribe => {
                if(projectDescribe){
                    return true;
                } else {
                    console.log('Please provide project description');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['javaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your porject. (Required)',
            validate: link => {
                if(link){
                    return true;
                } else {
                    console.log('project link is required!')
                    return false;
                }
            }

        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false

        },
        {
            name: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false

        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });






