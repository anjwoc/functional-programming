function add10(a, cb) {
  setTimeout(() => cb(a + 10), 100);
}

add10(5, (res) => {
  // console.log(res);
});

// a는 undefined가 출력되므로 값이 아니다.
const a = add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      // console.log(res);
    });
  });
});

function add20(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a + 20), 100));
}

// const data = add20(5).then(console.log);

// b의 경우는 Promise객체로서 값으로 다뤄진다.
// Promise {<poending>} 출력
// const b = add20(5).then(add20).then(add20).then(console.log);

/**
 * 값으로서의 Promise 활용
 * 비동기 상황이 값이라는 점은 함수로 전달이 가능하다.
 */

const before_go = (args, func) => func(args);

// args가 값이면 인자로 전달받은 함수에 입력으로 실행
// args가 Promise객체이면 then메소드를 이용
const go = (args, func) =>
  args instanceof Promise ? args.then(func) : func(args);

const add5 = (a) => a + 5;

// 100ms 후에 받은 인자를 그대로 리턴하는 함수
const delay = (args) =>
  new Promise((resolve) => setTimeout(() => resolve(args), 100));

const tmp = go(10, add5);
console.log(tmp);

// 아래 코드도 윗 줄과 같은 코드
go(go(10, add5), console.log);

const tmp2 = go(delay(100), add5);
tmp2.then(console.log);
