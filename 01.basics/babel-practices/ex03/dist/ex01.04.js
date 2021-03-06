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

function print({
  no,
  name,
  email
}) {
  // 템플릿 문자열(ES6)
  console.log(`${no} : ${name} : ${email}`);
} // for.. of(ES6)


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  let user = _users[_i];
  print(user);
}
