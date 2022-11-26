const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// element. map() calls a function once for each element in an array.
// use word.slice(1) to return the extracted part in a new string
// .join creates and returns a new string by concatenating all of the elements in an array.
function titleCase(isString) {
  return isString.split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
function titleCased() { 
  return (tutorials.map(tutorial => titleCase(tutorial)));
}