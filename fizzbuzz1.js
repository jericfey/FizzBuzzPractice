//Create counting function from 1 to some number
//for each number divisible by 3 print out fizz
//for each number divisible by 5 print out buzz
//for each number divisible by both print out fizzbuzz

for (let i = 1; i <= 100; i++) {
  //use modulo to determine if remainder exists
  //if number is divisible by both 3 and 5 then output fizzbuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  }
  //if no remainder when number divided by 3 output fizz
  else if (i % 3 == 0) {
    console.log("fizz");
  }
  //if no remainder when number divided by 5 output fizz
  else if (i % 5 == 0) {
    console.log("buzz");
  }
  //if number isn't divisible by 3 or 5 then output number
  else {
    console.log(i);
  }
}
