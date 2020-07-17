'use strict';

const repl = require('repl');

const students = [,
  "Paul Depew",
  "David Palagashvili",
  "Marlene Rinker",
  "Garhett Morgan",
  "Ashley Biermann",
  "Dave Wolfe",
];
const used = [];

function getRandomStudent() {
  let randomIndex = Math.floor(Math.random() * Math.floor(students.length));
  while (used.includes(students[randomIndex])) {
    if (used.length === students.length) {
      return 'All Students have been randomly selected :)';
    }
    randomIndex = Math.floor(Math.random() * Math.floor(students.length));
  };
  const student = (students[randomIndex]);
  used.push(student);
  if (student) {
    return student;
  }
  return 'Random student error!';
};



function getRandomPairs() {
  const pool = [...students];
  const results = [];
  let student1, student2;
  while (pool.length) {
    student1 = pool[Math.floor(Math.random() * Math.floor(pool.length))];
    student2 = pool[Math.floor(Math.random() * Math.floor(pool.length))];

    if (student1 !== student2) {
      results.push(`${student1} | ${student2}`);
      pool.splice(pool.indexOf(student1), 1);
      pool.splice(pool.indexOf(student2), 1);
    } else if (student1 === student2 && pool.length === 1) {
      let pairIndex = Math.floor(Math.random() * Math.floor(results.length));
      let pair = results[pairIndex];
      pool.splice(pool.indexOf(student1), 1);
      results[pairIndex] = pair += ` | ${student1}`;
    }
  }
  return results;
}

console.log(
  '***** RANDOM STUDENT functions loaded *****\n',
  'find random students with: `randomStudent()`\n',
  'Make random Pairs with `randomPairs()'
);
const r = repl.start('> ');
r.context.randomStudent = getRandomStudent;
r.context.randomPairs = getRandomPairs;
