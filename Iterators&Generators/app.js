/** Iterators and Generators */
/** 
 * terators and generators which are both part of the ES6 standard. 
 * So iterators and generators are both different but they are used in similar ways and they both used to iterate through something.
 *
*/


// Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length ?
//       { value: names[nextIndex++], done: false } :
//       { done: true }
//     }
//   }
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator Example
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
function* createIds() {
    let index = 1;
  
    while(true) {
      yield index++;
    }
  }
  
  const gen = createIds();
  
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);