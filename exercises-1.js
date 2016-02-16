

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    var anumber = 0;
    var args = [].slice.call(arguments);
    function sumList (item) {
      anumber += item;
    }
    args.forEach(function (item){ //this is applying the sumList function to every item in args
      anumber += item;
    });
    return anumber;
}

console.assert( sum(1, 2, 3, 4, 5) === 15);

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    var anumber = 0; //create empty variable
    // parse arguments into an array
    var args = [].slice.call(arguments);
    args.forEach (function(item) {
      anumber += item;
    });
    return anumber / args.length;
    }



console.assert( average(2, 4, 6, 8) === 5 );

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var anumber = 0;
    args.forEach(function(item)
  {
    if (item > anumber) {
      anumber = item;
    }
  });
  return anumber;
}

console.assert( largest(2, 4, 6, 8) === 8 );

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var astring = "";
    args.forEach(function(item)
  {
    if (item.length > astring.length)
    {astring = item;}
  });
  return astring;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

var arrayMethod = [1, 24, 3, "hello", true, 102, "woody", false,];

// .sort()

console.assert( arrayMethod.sort());

// .concat()

console.assert( arrayMethod.concat());

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
