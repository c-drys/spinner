process.stdout.write('hello from spinner1.js... \rheyyy\n');
// The first few characters are replaced by "heyyy". This is because \r brought our cursor back to the beginning.


setTimeout(() => {
  process.stdout.write('\r||   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r//   ');
}, 3000);

setTimeout(() => {
  process.stdout.write('\r--   ');
}, 5000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\\\   '); 
}, 7000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r||   '); 
}, 9000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r//   '); 
}, 11000);


setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r--   '); 
}, 13000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\\\   '); 
}, 15000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r||   '); 
}, 17000);



// ... fill in the rest yourself ...