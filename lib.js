const map = (fn, iter) => {
  let res = [];
  for (const val of iter) {
    res.push(fn(val));
  }

  return res;
};

const filter = (fn, iter) => {
  let res = [];
  for (const val of iter) {
    if (fn(val)) res.push(val);
  }

  return res;
};

const reduce = (fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const val of iter) {
    acc = fn(acc, val);
  }
  return acc;
};

module.exports = { map, filter, reduce };
