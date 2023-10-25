// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// Get arguments from command line
const args = process.argv;
let array = args.slice(2);

// console.log(array);

const timer = (array) => {

  if (array.length === 0) {
    return;
  }
  // Loop through the numbers in the array and set a "timer" for each of them
  for ( const num of array) {

    if (num < 0) {
      return;
    }

    if (isNaN(num)) {
      return;
    }

    setTimeout(() => {
      process.stdout.write(`${num} seconds have passed \x07\n`);
    }, num * 1000);
  }
}

timer(array);

