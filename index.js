// add solution here
var foo = [];

function theBeatlesPlay(mus, inst) {
  for (let i = 0; i < mus.length; i++) {
  foo.push(`${mus[i]} plays ${inst[i]}`);
  }
  return foo;
}

cons facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and a boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
let i = 0
  while (i < 5) {
    console.log(`${facts[i]} !!!`)
    console.log(--facts);
  }
  return facts;
}
