const { map, reduce, filter } = require('./lib');

// iterable object

const products = [
  { name: 'a', price: 15000 },
  { name: 'b', price: 20000 },
  { name: 'c', price: 35000 },
  { name: 'd', price: 45000 },
  { name: 'e', price: 55000 },
];

let maps = new Map();
maps.set('a', 10);
maps.set('b', 10);
const it = maps[Symbol.iterator]();

console.log(it.next());
console.log(it.next());

/**
 * p => p.price < 20000 - fn
 * products             - iter
 */
console.log(...filter((p) => p.price < 20000, products));

/**
 * reduce 함수
 *
 */
const nums = [1, 2, 3, 4, 5];
let total = 0;

for (const i of nums) {
  total += i;
}
console.log(total);

const add = (a, b) => a + b;

// reduce에 초기값을 준 예시
console.log(reduce(add, 0, nums)); // 15
console.log(reduce(add, nums)); // 15
// reduce에 초기값을 주어지지 않은 예시
// reduce(add, [1,2,3,4,5])
// 초기값이 없는 경우에는 첫 번째 요소를 꺼내서 초기값으로 사용한다.
// reduce(add, 1, [2,3,4,5])
console.log(reduce(add, nums)); // 15

// reduce를 이용해 add를 수행하는 과정
console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5)); // 15

/**
 * reduce2
 */
console.log(reduce((totalPrice, product) => totalPrice + product.price, 0, products));
