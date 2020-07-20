'use strict';

/**
 * Node script for running a repl preloaded with randomStudent Pool and randomization functions
 */

const repl = require('repl');
const fs = require('fs');

const pool = JSON.parse(fs.readFileSync(`${__dirname}/students.config.json`)).pool;
const used = [];

function getRandomStudent() {
  let randomIndex = Math.floor(Math.random() * Math.floor(pool.length));

  while (used.includes(pool[randomIndex])) {
    if (used.length === pool.length) {
      return 'All Students have been randomly selected :)';
    }
    randomIndex = Math.floor(Math.random() * Math.floor(pool.length));
  };

  const student = pool[randomIndex];
  if (student) {
    return student;
  }
  return 'Random student error!';
};

function reset() {
  used.forEach(function () {
    used.pop();
  });
}

function getRandomPairs() {
  const pool = [...pool];
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
  'Find random students with: `rs()`\n',
  'Make random Pairs with; `rp() \n',
  'Reset students with: rst(0)'
);
const r = repl.start('> ');
r.context.rs = getRandomStudent;
r.context.rp = getRandomPairs;
r.context.rst = reset;
