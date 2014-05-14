// These are all pretty much what you would expect.
// Note that the empty string is falsy, but the empty
// Array is truthy.
// All of these are truthy
print('All of thse are truthy');
show(true);
show('true');
show('false');
show('string');
show(1);
show(Infinity);
show(-Infinity);
show({});
show([]);
show([null]);
show([undefined]);
show([0]);
show([1]);

print('\nAll of thse are falsey');
show(NaN);
show('');
show(0);
show(-0);
show(null);
show(undefined);

print('\nCrazy comparisons');
compare([null], 0);   // true
compare([null], '');  // true
compare(null, 0);     // false
compare(null, '');    // false
compare([undefined], 0);     // true
compare([undefined], '');    // true
compare(undefined, 0);     // false
compare(undefined, '');    // false
compare(0, -0); // true
compare(1, -1); // false
compare(Infinity, Infinity); // true
compare(Infinity, -Infinity); // false
compare(NaN, NaN); // false

function compare(x, y) {
  print('X/Y Comparison');
  print('X:');
  show(x);
  print('Y:');
  show(y);
  print(['X == Y', (x==y), '\n'].join(' '));
}

function show(x) {
  print(['typeof', x, (typeof x)].join(' '));
  print(['truthy?', x ? 'yes' : 'no'].join(' '));
}

print = (typeof print !== 'function') ? console.log : print;
