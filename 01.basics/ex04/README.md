## ex04 : 애플리케이션 번들링 : webpack
1. webpack은 작게 분리된 많은 모듈들의 의존성을 분석하여 하나의 js 파일로 묶은 도구
2. 하나의 js 파일을 번들(bundle)이라고 하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업만을 의미하는 것이 아니다. => 애플리케이션 빌드 작업도 한다.
4. 빌드 작업
 - linting(ESLing, 문법 체크) 작업
 - document 작업(JSDoc) 작업
 - testing(Mocha, Jest) 작업
 - 난독화/압축(Uglify) 작업
 - 번들링
5. 자바스크립트 뿐만 아니라 다양한 애셋(image, css, font)들도 모듈로 취급하는 추상화한다.

6. 프로젝트 생성
```bash
$ mkdir ex04
$ cd ex04
$ npm init -y
$ npm i -D webpack webpack-cli express
$ npm node_modules/.bin/webpack --version
$ npx webpack --version
```

7. 프로젝트 디렉토리
<pre>
    /ex04
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |        |--- index.html
      |        |--- bundle.js
      |--- src
      |        |--- index.js
      |        |--- App.js
      |--- dev-server
</pre>

8. scripts
```json
{
  "name": "ex04",
  "version": "1.0.0",
  "description": "",
  "main": "dev-server.mjs",
  "scripts": {
    "start":"node dev-serve.mjs",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"npx webpack ./src/index.js -o ./public"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1",
    "webpack": "^5.45.1",
    "webpack-cli": "^4.7.2"
  }
}
```

9. 애플리케이션 작성<br>
[public/index.html]
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>#ex04</title>
</head>
<body>
    <div id='root'></div>
    <script src='bundle.js'></script>
</body>
</html>
```

[index.js]
```javaScript
import { App } from './App.js';
document.getElementById('root').appendChild(App());
```

[App.js]
```javaScript
const App = function (){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}
export { App };
```

10. 빌드(번들링)
```bash
$ npx webpack ./src/index.js -o ./public/bundle.js
$ npm run build
```
11. 테스트 서버 실행
```bash
$ npm start
```