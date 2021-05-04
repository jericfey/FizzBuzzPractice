//Create counting function from 1 to some number
//for each number divisible by 3 print out fizz, divisible by 5 print out buzz, or divisible by both print out fizzbuzz
//prompt user to type in highest number to count to

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Provide number the program will count to: ",
      name: "maxnum",
    },
    {
      type: "input",
      message: 'Provide number divisible by that outputs the word "Fizz"',
      name: "fizznum",
    },
    {
      type: "input",
      message: 'Provide number divisible by that outputs the word "Buzz"',
      name: "buzznum",
    },
  ])
  .then((answer) => {
    for (let i = 1; i <= answer.maxnum; i++) {
      //use modulo to determine if remainder exists
      //if number is divisible by both 3 and 5 then output fizzbuzz
      if (i % answer.fizznum == 0 && i % answer.buzznum == 0) {
        console.log("fizzbuzz");
      }
      //if no remainder when number divided by 3 output fizz
      else if (i % answer.fizznum == 0) {
        console.log("fizz");
      }
      //if no remainder when number divided by 5 output fizz
      else if (i % answer.buzznum == 0) {
        console.log("buzz");
      }
      //if number isn't divisible by 3 or 5 then output number
      else {
        console.log(i);
      }
    }
  });
