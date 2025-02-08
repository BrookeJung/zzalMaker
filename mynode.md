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