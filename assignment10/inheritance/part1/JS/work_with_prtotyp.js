//Which values are shown in the process?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)

/** Solution: There should be 3 answers.
 *1.true, taken from rabbit.
2.null, taken from animal.
3.undefined, there’s no such property any more.
 * 
 */