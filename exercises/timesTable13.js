/**
 * Prints out the first n multiples of 13.
 *
 * The output should look like:
 *
 *   13 times 1 is 13
 *   13 times 2 is 26
 *   13 times 3 is 39
 *   13 times 4 is 52
 */
function timesTable13(n) {
  // This is your job. :)
  // I'm not sure how to put things into the system correctly, but I beleive some type of for loop is needed to go through each number 1-13
  //and multiply then a console.log with english statements [i 'times' 13 'is' answer].
  console.log(result);
  // Use console.log to print out statements like "13 times 5 is 65"
}

if (require.main === module) {
  let input;

  input = 3;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();


  input = 5;
  console.log('The first', input, 'multiples of 13 are:')
  timesTable13(input);
  console.log('----------------');
  console.log();
}
