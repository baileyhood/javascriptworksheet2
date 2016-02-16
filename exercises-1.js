

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
for(var i = 0; i < array.length; i++) {
 callback(array[i]);
}
}
//found this one really confusing. It's basically showing you how a forEach loop works.

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; }); //6x4??
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    var anumber = 0;
    var args = [].slice.call(arguments);
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

// .concat() method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments

console.assert( arrayMethod.concat());

// .indexOf() //returns the index of what you're calling

console.assert( arrayMethod.indexOf());

// .split() splits the string into an array of substrings

var arrayMethod2 = "Hello, my name is Bailey.";

console.assert( arrayMethod2.split("a"));

// .join() // joins the elements of an array into a string

console.assert( arrayMethod.join());

// .pop() //  removes the last element from an array and returns that element.

console.assert( arrayMethod.pop());

// .push() adds one more element to the end of the array

console.assert( arrayMethod.push("name"));

// .slice() selects elements from an array

console.assert( arrayMethod.slice(1,3)); // have to do it by index

// .splice() removes exisiting elements and/or adds new ones

console.assert (arrayMethod.splice(1,1)); //first part selects what index, second part indicates #
//of old arrays to remove

// .shift() removes the first element of an array and returns it

console.assert (arrayMethod.shift());

// .unshift() adds a new element to beginning of array and returns new length of arrays

console.assert (arrayMethod.shift('cat'));

// .filter() similar to forEach, it creates a new array with all elements that pass the test implemented by the provided function.

function isSmallEnough () {
  value = 0;
  return value < 10;
}
console.assert (arrayMethod.filter (isSmallEnough));

// .map() creates a new array with the results of calling a
// provided function on every element in this array. Sounds like forEach??

function isSmallEnough () {
  value = 0;
  return value < 10;
}
console.log (arrayMethod.map (isSmallEnough));
