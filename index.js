// add solution here
var foo = [];

function theBeatlesPlay(mus, inst) {
  for (let i = 0; i < mus.length; i++) {
  foo.push(`${mus[i]} plays ${inst[i]}.`);
  }
  return foo;
}
