'use strict'; // 블록 스코프 변수(ES6)

const users = [{
  no: 0,
  name: 'ryan',
  email: 'ryan@kakao.com'
}, {
  no: 1,
  name: 'apeach',
  email: 'apeach@kakao.com'
}]; // 객체 분해(ES6)

function print(_ref) {
  let {
    no,
    name,
    email
  } = _ref;
  // 템플릿 문자열(ES6)
  console.log(`${no} : ${name} : ${email}`);
} // for.. of(ES6)


for (let user of users) {
  print(user);
}
