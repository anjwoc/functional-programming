const curry = (fn) => (a, ..._) => (_.length ? fn(a, ..._) : (..._) => fn(a, ..._));

const map = curry((fn, iter) => {
  let res = [];
  for (const val of iter) {
    res.push(fn(val));
  }

  return res;
});

const filter = curry((fn, iter) => {
  let res = [];
  for (const val of iter) {
    if (fn(val)) res.push(val);
  }

  return res;
});

const reduce = curry((fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const val of iter) {
    acc = fn(acc, val);
  }
  return acc;
});

module.exports = { curry, map, filter, reduce };
