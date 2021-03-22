const { map, reduce, filter } = require('./lib');

const log = console.log;

const products = [
  { name: 'a', price: 15000 },
  { name: 'b', price: 20000 },
  { name: 'c', price: 35000 },
  { name: 'd', price: 45000 },
  { name: 'e', price: 55000 },
];

// 20000원 미만의 모든 상품
console.log(
  map(
    (p) => p.price,
    filter((p) => p.price < 20000, products),
  ),
);

// 20000원 이상의 모든 상품의 가격의 합

const add = (a, b) => a + b;

// 코드의 해석은 가장 안쪽부터 해석하면 된다.
console.log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price >= 20000, products),
    ),
  ),
);

// 코드를 값으로 다루어 표현력 높이기
const go = (...args) => {
  reduce((a, func) => func(a), args);
};

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  log,
);
// 111

// const pipe = (...fs) => (args) => go(args, ...fs);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100,
  console.log,
);

f(0, 1);
go(
  products,
  (products) => filter((p) => p.price > 20000, products),
  (filteredProducts) => map((p) => p.price, filteredProducts),
  (prices) => reduce(add, prices),
  console.log,
);
