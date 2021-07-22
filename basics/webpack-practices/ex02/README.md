## webpack-practice : ex02
1. 빌드하기
```bash
$ mkdir ex02
$ mkdir ex02
$ npm init -y
$ npm i 
```

2. 디렉토리 구조
<pre>
    /ex02
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |        |--- index.html
      |        |--- bundle.js
      |--- src
      |        |--- index.js
      |        |--- App.js
      |--- webpack.config.js [webpack 설정 파일]
      |--- dev-server.mjs
</pre>

3. 빌드하기
```bash
$ npx webpack
```
webpack.config.js의 output 섹션에 지정된 ./public/bundle.js로 번들링 됨

3. test server 실행
```bash
$ node dev-server.mjs
```