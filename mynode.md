* extension 다운로드
  * liveserver
* cmd + , settings > format on save > enable
  : 자동 포맷팅
* react , react-dom 추가
    * https://ko.legacy.reactjs.org/docs/add-react-to-a-website.html
  ```
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  ```

  * babel 추가
    * https://babeljs.io/docs/en/
  ```
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  ```

  * script type 변경
    * type="text/babel"

* Babel
    * 자바스크립트 컴파일러
    * 새로운 문법을 브라우저가 이해할수 있게 통역해준다
    * 헤더쪽에 생긴걸 볼 수 있음
* 자바 스크립트 문법을 리액트안에서 사용하려면 중괄호 사용
  ```
      const favorites = (
      <ul class="favorites">
        {catItem}
        {catItem}
        {catItem}
      </ul>
    )
  ```

* 리액트 엘리먼트의 내부 요소로 전달된것들은 props.children 으로 받을 수 있음

* class 대신className 사용

* jsx 에서 차이
  * onclick="hi()" => onClick={hi}
  * src="img" => src={img}

* 스타일링 
    * 인라인 스타일링 프롭으로 바로 style 객체 전달

* 리액트 스타일링 라이브러리
  * emotion
  * tailwind css

* 이벤트 다루기
  * 리액트에서 이벤트 핸들러 이름 짓는 관례 handle~ onClick : handleClick, onMouseOver : handleMouseOver ... 
  * + 추가로, 핸들러 함수를 props 로 넘길땐 on~ 접두어를 붙힌 프롭명으로 명명하는게 컨벤션이다 ex ) onClick={handleClick}
  * form 이 submit 되면 브라우저가 새로고침되는게 기본동작이기때문에 기본으로 받는 event.preventDefault() 사용

* useState 로 상태 만들기
  * const [counter, setCounter] = useState(0);
  * useState 의 첫번째 인자는 값 자체고 , 두번째 인자는 값 변경하기 위한 함수
  ```
     // const counterState = React.useState(1);
      // const counter = counterState[0];
      // const setCounter = counterState[1];
  ```

* 상태 끌어올리기 
    * 자식 컴포넌트에서만 쓰이던 상태를 상위에서 같이 쓰곡 싶을때 위로 끌어 올리는걸 lifting state up 이라고함
    * 그냥 구현을 상위에서하고 자식에게 프롭스로 넘겨준다는 말임 (맞고 안맞고의 경계가 모호함)

* 리액트에서 리스트 관리
```
        const Favorites = () => {
      return (
        <ul className="favorites">
          {CATS.map((src, index) => <CatItem src={src} title="고양이" key={index} />)}
        </ul>
      )
    }    
    ```
    * ES6 + 스프레드 오퍼레이터 문법 [...list, newItem]

* form 다루기

* localstorage
    * localStorage.setItem(key, value);
    * localStorage.getItem(key);
    * localStorage.removeItem(key);
    * 로컬 스토리지에 밸류 저장시 무조건 스트링으로 저장되기 때문에 읽어올때 변환해서 가져와야함

* git config --global user.name "your name"
* git config --global user.email "your email"
* git config --global init.defaultBranch main

* git 
```
# 원격저장소 목록 확인
git remote -v
# 원격 저장소 연결 해제
git remote rm origin
# 원격 저장소 연결
git remote add <원격 저장소명>  <repo url>
git remote add origin https://github.com/BrookeJung/zzalMaker.git
# github 기본 저장소 브랜치가 master에서 main으로 변경되었는데 로컬깃에서는 기본으로 master로 생성되기때문에 브랜치 명을 변경하자 (현재 브랜치명을 -M 강제로 main으로 변경)
git branch -M main

* Fetch API
    * JS에서 HTTP 요청/응답을 조작할수 있게 해주는 API[https://developer.mozilla.org/ko/docs/Web/API/Fetch_API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

```
    fetch("http://example.com/movies.json")
    .then(response => response.json())
    .then(jsonData => console.log(jsonData));
```
```
    async function logJSONData() {
    const response = await fetch("http://example.com/movies.json");
    const jsonData = await response.json();
    console.log(jsonData);
}
```

* 자바스크립트 비동기 처리
    * 자바스크립트 비동기 처리 :특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실해나는 자바스크립트 특성 
    ** ex. ajax 호출 시 비동기로 처리되지 않으면 하나의 화면을 렌딩하기 위해 호출하는 모든 콜을 기다리기위해 수십초의시간이 걸린다
    ** ex. setTimeout() 도 비동기방식으로 처리
    * 콜백 함수로 비동기 처리 방식 문제 해결 (특정 로직이 끝났을 때 원하는 동작 실행) => 연속 사용시 콜백 지옥 => 콜백함수 분리 또는 promise/async 로 해결
    * Promise 나 Async

* initCat(); ui 업데이트마다 호출
    * 두번째인자 : 관찰할 항목 -> 두번째인자에서 [] 최초 앱 생성시에만 호출 / [counter] 카운터 변수가 바뀔때마다 호출.. 
        * 리액트 컴포넌트 안에 있는 함수는 기본적으로 ui 가 업데이트 될때마다 호출되늗데 특정 상태가 업데이트 됐을때만 호출되도록 제한하려면 useEffect 두번째 인자로 해당 상태를 전달
        *  최초 앱 생성시에만 호출하려면 빈 배열
```
          React.useEffect(() => {
        initCat();
      }, []);
```
* 조건부 렌더링
    ```
    ...컴포너트 구현 부... 
    return (
        {itemList.length === 0 && <div style={{textalign:'center'}}>조회 가능 목록이 존재하지 않습니다.</div>}
    )
    ```

* 값이 변경될때마다 접근하는게 아니라 최초 한번만 로컬스토리지에서 겟
```
      // const [counter, setCounter] = React.useState(jsonLocalStorage.getItem("counter") || 0);
      const [counter, setCounter] = React.useState(() => {
        return jsonLocalStorage.getItem("counter") || 0;
      });   
```

* 지연 초기화
useState 에서 setCounter() 수행시 counter 의 값이 바로 새로운 값이 되지 않는다.
함수로 리턴해서 개선 가능 
```
      const [counter, setCounter] = React.useState(() => {
        return jsonLocalStorage.getItem("counter") || 0;
      });
      setCounter((prevCounter) => prevCounter + 1);
      // 변경되는 값으로 부가적인 동작을 해야하는경우
      setCounter((prevCounter) => {
        localStorage.setItem("counter", prevCounter + 1);
        return prevCounter + 1;
      });
```

* 실무 환경 설정
** 프로덕션 버전 사용, 바벨 떼기 이미 통역된 Js를 사용
** create-react-app
    * 리액트 라이브러리 셋업
    * 웹팩 셋업 : 웹팩(웹개발할때 필요한 라이브 서버, 코드 포맷팅, 코드 잘못된거 찾는 린트 등을 명령어로 하기 위한것)
        * 저장할때마다 바벨이 jsx를 js 로 바꿔 저장할때마다 웹브라우저에 띄워 개발용이
        * 테스트 셋업
        * 빌드 셋업
https://create-react-app.dev/
    # React app 프로젝트 생성 
    pnpm create react-app cat-jjal-maker
    # React 선택
    # variant 선택
    cd cat-jjal-maker
    pnpm i
    vite
```

* CRA 로 서비스 이식
  * import, export 문법 : 파일을 모듈처럼 가져오고 내보내는 문법 https://joshua1988.github.io/vue-camp/es6+/modules.html#import-export-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6

  * 컴포넌트 분리
  ```
  git add.
  git commit -m ""
  git push origin main

  pnpm i gh-pages
  pnpm run build

  #gh-pages -d dist
  pnpm deploy 
  ```

  #pages 에서 gh-pages 브랜치 확인 및 배포 확인