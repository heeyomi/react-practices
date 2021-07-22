## webpack-practice : ex01
1. 빌드하기
```bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli express
```

2. 디렉토리 구조
<pre>
    /ex01
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |        |--- index.html
      |        |--- bundle.js
      |--- src
      |        |--- index.js
      |        |--- App.js
      |--- dev-server.mjs
</pre>

3. test server 실행
```bash
$ npx webpack ./src/index.js -o ./public
```
./public/main.js로 번들링 됨

4. test server 실행
```bash
$ node dev-server.mjs
```
ES6 모듈로 실행(확장자를 .mjs) 해야 함.