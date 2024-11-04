/* 1.- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 'You are old
enough to drive' but if not 18 give another feedback stating to wait for the number of years, he needs to
turn 18.
Enter your age: 30
You are old enough to drive.
Enter your age:15
You are left with 3 years to drive. */

let age = prompt("Enter your age:");

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

/* 2.- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the
result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me. */

let myAge = 23;
let yourAge = prompt('Enter your age: ');

if (myAge > yourAge){
    console.log(`I am older than you by ${myAge - yourAge} years`);
}else if (myAge == yourAge){
    console.log('Our age is the same');
}else{
    console.log(`You are ${yourAge - myAge} years older than me`);
}

/* 3.- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
● using if else
● ternary operator */

//Using if else
let a = 4;
let b = 3;

if (a > b){
    console.log('a is greater than b');
}else{
    console.log('a is less than b');
}

//Ternary operator 
let comparison = a > b;

comparison
? console.log('a is greater than b')
: console.log('a is less than b');

/*4.- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
● September,October or November,the season is Autumn.
● December,Januaryor February, the season is Winter.
● March,April or May, the season is Spring
● June,July orAugust, the season is Summer */

const month = prompt('Write a month: ').toLowerCase();

switch (month) {
  case 'september':
  case 'october':
  case 'november':
    console.log('The season is Autumn');
    break;
  case 'december':
  case 'january':
  case 'february':
    console.log('The season is Winter');
    break;
  case 'march':
  case 'april':
  case 'may':
    console.log('The season is Spring');
    break;
  case 'june':
  case 'july':
  case 'august':
    console.log('The season is Summer');
    break;
  default:
    console.log('Invalid month');
}


/*5.- Write a code which can give grades to students according to their scores:
● 80-100,A
● 70-89,B
● 60-69,C
● 50-59,D
● 0-49,F */

const score = parseInt(prompt('Enter the student\'s score (0-100):'), 10);
let grade;

switch (true) {
  case (score >= 80 && score <= 100):
    grade = 'A';
    break;
  case (score >= 70 && score <= 79):
    grade = 'B';
    break;
  case (score >= 60 && score <= 69):
    grade = 'C';
    break;
  case (score >= 50 && score <= 59):
    grade = 'D';
    break;
  case (score >= 0 && score <= 49):
    grade = 'F';
    break;
  default:
    grade = 'Invalid score';
}

console.log(`The grade is ${grade}`);


console.log('By Yair Guzman')
