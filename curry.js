const { curry, map, reduce, filter } = require('./lib2');

const products = [
  { name: 'a', price: 15000 },
  { name: 'b', price: 20000 },
  { name: 'c', price: 35000 },
  { name: 'd', price: 45000 },
  { name: 'e', price: 55000 },
];

// const curry = (fn) => (args, ..._) => (_.length ? fn(args, ..._) : (..._) => fn(args, ..._));

// 코드를 값으로 다루어 표현력 높이기
const go = (...args) => {
  reduce((val, func) => func(val), args);
};

const pipe = (...fs) => (args) => go(args, ...fs);

const add = (a, b) => a + b;

const multiplex = curry((a, b) => a * b);

// console.log(multiplex(1)(2));

const tmp = multiplex(5);

// console.log(tmp(2));
// console.log(tmp(3));

const totalPrice = pipe(
  map((p) => p.price),
  reduce(add),
);

// 아래 두 코드는 동일한 코드
go(
  products,
  (products) => filter((p) => p.price > 20000)(products),
  (filteredProducts) => map((p) => p.price)(filteredProducts),
  (prices) => reduce(add)(prices),
  console.log,
);

// pipe pattern
// currying을 이용하면 위와 같은 결과가 아래의 코드로 나온다.
go(
  products,
  filter((p) => p.price > 20000),
  map((p) => p.price),
  reduce(add),
  console.log,
);

go(
  products,
  (products) => filter((p) => p.price > 20000, products),
  (filteredProducts) => map((p) => p.price, filteredProducts),
  totalPrice,
  console.log,
);
