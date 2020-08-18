var inquirer = require("inquirer");
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown')


const questions = [
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
      },
      {
        type: "input",
        name: "installation",
        message: "Provide steps for how to install your project."
      },
      {
        type: "input",
        name: "usage",
        message: "Provide examples for use."
      },
    {
      type: "checkbox",
      message: "Choose a license:",
      name: "license",
      choices: [
        "GNU", 
        "MIT", 
        "Community"
      ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are you contribution guidelines?"
      },

      {
        type: "input",
        name: "tests",
        message: "Write a test for your project"
      },
      {
        type: "input",
        name: "question1",
        message: "Link to your GitHub user profile picture."
      },
      {
        type: "input",
        name: "question2",
        message: "What is your GitHub Email?"
      },
  ];

  function writeToFile(fileName, data) {
    var filename = `${fileName}.md`;
    
    fs.writeFile(filename, data, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  }
  
  
  
function init() {
    inquirer.prompt(questions).then((answers) => {
writeToFile('GeneratedREADME', generateMarkdown(answers))
        

      });

  }
  
  init();

