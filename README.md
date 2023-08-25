# [Week 1] Best Practice of Wanted Pre-onboarding Assignment

[원티드 프리온보딩 프론트엔드 인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 best practice를 제작한 프로젝트입니다.

## 💁‍♂️ 팀 소개

| 성지현                                    | 신재일                                  | 윤혜영                                            | 조병현                                            | 채하은                                      | 홍성욱                                |
| ----------------------------------------- | --------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------- | ------------------------------------- |
| [@jhsung23](https://github.com/jhsung23/) | [@JaeIl00](https://github.com/JaeIl00/) | [@creamy-ocean](https://github.com/creamy-ocean/) | [@ChoByungHyun](https://github.com/ChoByungHyun/) | [@chaehaeun](https://github.com/chaehaeun/) | [@ukssss](https://github.com/ukssss/) |
| 초기 프로젝트 셋팅                        | api 요청 및 응답 처리                   | todo CRUD                                         | 로그인                                            | 회원가입                                    | route 및 global layout                |


## 🔗 배포 링크

배포 링크: https://pre-onboarding-12th-1-3.vercel.app

## 🎬 프로젝트 실행 방법

본 repository를 clone한 다음 프로젝트 폴더 경로에서 다음 명령어를 실행하면, 개발 환경에서의 React App을 실행하실 수 있습니다.

```
npm install
npm start
```

브라우저가 자동으로 실행되지 않는다면 `http://localhost:3000`에 직접 접속해 주세요.

## 🛠️ 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
</div>

## 🎖️ Best Practice 선정 이유

### **[Assignment 1] 유효성 검사**

> - 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
>   - 이메일 조건: `@` 포함
>   - 비밀번호 조건: 8자 이상
> - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

|  이름  | 의견 |
| ------ | --- |
| 성지현 | - 이메일: includes(’@’), 비밀번호: length ≥ 8 <br/>- 인풋 컴포넌트의 onChange 이벤트 핸들링+유효성 검사, submit 기능을 useAuthForm 커스텀 훅을 만들어 로직 분리<br />- useAuthForm이 리턴하는 isValidForm 상태를 버튼 컴포넌트의 disabled 속성으로 줌 |
| 신재일 | - 이메일 : includes(’@’) 사용<br />- 비밀번호: length >= 8 사용<br />- 버튼: debounce 사용해 유저가 입력 완료한 뒤 유효성 검사 및 disabled 변경<br />- 중복 로직 유틸 함수 생성, 같은 의미를 지닌 값들을 하나의 변수로 관리 |
| 윤혜영 | - 이메일 : includes(’@’) 사용<br />- 비밀번호: length >= 8 사용<br />- 버튼 : handleEmail, handlePassword 함수에서 email, password의 유효성을 state로 상시 체크하여 버튼 disabled 속성 변경 |
| 조병현 | - 이메일 : includes(’@’)사용<br />- 비밀번호 : length >= 8 사용<br />- 버튼 : email, password valid를 useState로 관리, 상시체크 후 버튼 비활성화 |
| 채하은 | 페이지 컴포넌트에 로직을 많이 두고싶지 않아 커스텀훅과 폼, 인풋 컴포넌트에 로직 몰빵. 구조가 복잡해져 가독성이 나빠진 것에 아쉬움이 남음<br />-이메일 : includes(’@’)사용<br />-비밀번호 : length >= 8 사용<br />-useDebounce 커스텀훅을 활용해 일정 시간 내에 추가 입력이 없을 경우에만 유효성 검사 |
| 홍성욱 | - 이메일 : includes(’@’) 사용<br />- 비밀번호 : length >= 8 사용<br />- 버튼 : useEffect 를 사용해서 email, password 의 값을 useState로 관리, 유효성 검사후 만족할 경우 버튼 활성화 |

#### **Best Practice**

- 공통 UI 컴포넌트 재사용
  - 생산성과 유지보수성 향상하기 위함
- Input Value, Validation 상태 관리 커스텀훅 생성 및 재사용
  - 중복되는 로그인과 회원가입 form이 불필요하게 나뉘는 것을 방지하기 위해 공통 UI컴포넌트 및 Input Value, Validation 상태 관리 커스텀훅 사용.
- debounce 사용하여 Validation 상태 업데이트
  - 불필요한 Validation검사가 많아지는 것을 방지하기 위해 debounce 커스텀 훅 생성 및 재사용.

### **[Assignment 2&3] 페이지 이동 및 JWT 관리**

> - 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
> - 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
> - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
> - 응답받은 JWT는 로컬 스토리지에 저장해주세요

|  이름  | 의견 |
| ------ | --- |
|공통 의견 |- 로그인/회원가입 성공 시 useNavigate 사용하여 페이지 이동 <br />- 로그인 성공 시 localStorage 에 토큰 저장|

#### **Best Practice**

- 로그인/회원가입 성공 시 `useNavigate` 사용하여 페이지 이동
- 로그인 실패 시 alert 창 띄우기 (`window.alert(err.response.data.message)`)
  - 사용자에게 실시간 피드백을 제공하여 무엇이 잘못되었는지 알려주기 위해 사용

### **[Assignment 4] 리다이렉트**

> - 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
> - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
> - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

|  이름  | 의견 |
| --------- | --- |
| 성지현 | - /signin 및 /signup 주소에 접속했을 때 마운트되는 SignInPage 및 SignUpPage 컴포넌트에서 로컬스토리지 내 토큰 존재 여부를 검사함. <br />- 토큰이 존재하면 SignInPage 및 SignUpPage는 <Navigate to={’/todo’} /> 를 리턴. <br />- /todo 경로에 해당하는 TodoPage는 ProtectedRoute 컴포넌트로 감싸주어 토큰이 있으면 TodoPage로 이동하지 않고 SignInPage로 이동하도록 함. |
| 신재일 | - 각 Page Root Component에서 useEffect로 local storage 토큰 유무 확인하고 useNavigate사용하여 리다이렉트 동작 |
| 윤혜영 | - signin, signup, todo 파일에서 각각 useEffect로 토큰 확인 후 useNavigate로 리다이렉트 |
| 조병현 | - 라우터 파일에서  useParams 를 의존하는 useEffect로 token존재 여부확인, path에 맞게 useNavigate로 리다이렉트 |
| 채하은 | - Context API를 사용하여 인증 토큰을 관리하고, 각 페이지에서 useEffect를 활용하여 로그인 상태에 따라 리다이렉트를 구현. 과제에서는 구현하지 않았지만 protected route 기능 추가하고 싶음 |
| 홍성욱 | - AuthContext 를 사용하여 인증 토큰 관리, 각 페이지에서 Context 를 통해 token 값을 조회하여 유/무에 따른 리다이렉트 구현 (useNavigate) |

#### **Best practice**

- `createBrowserRouter`로 라우터 작성
- `ProtectedRoute` 컴포넌트에 토큰 검사하는 로직을 담고 그에 따른 라우팅 처리, 즉 각 페이지의 useEffect 로직을 컴포넌트화 했다고 생각
- token의 유/무만 검사하는 방식이 아닌 token이 유효한 지를 검사하는 로직을 추가 (401 status, get 방식 사용)
- `ProtectedRoute` 컴포넌트에서 token 값을 가져와 이를 유효성 검사를 진행, 유효한 토큰일 경우 리다이렉트를 구현하기 위해 만든 `navigateBasedOnAuth` 함수가 실행
- `navigateBasedOnAuth` 함수를 제작해 path 경로와 유효한 token 을 갖고 있는지를 나타내는 isAuthenticated 변수를 사용해 경우에 따라 리다이렉트 구현
- 리다이렉트 과정에서 이전 페이지의 값이 출력되었다가 사라지는 현상이 발생하여 `shouldRender` 함수에서 경우에 따라 null 혹은 element 를 출력하도록 하여 이를 방지

### **[Assignment 5] 투두 리스트 목록과 체크박스**

> - `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
> - 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
> - TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요

|  이름  | 의견 |
| ------ | --- |
| 성지현 | - /todo 경로에 접속했을 때, loader를 통해 투두 목록을 가져오는 요청 함수가 실행되도록 함.<br />- useLoaderData로 loader가 가져온 데이터를 TodoList 컴포넌트에 내려주어 화면에 렌더링. |
| 신재일 | - Prop으로 전달받은 access-token이 있다면 Todo List를 서버에 요청 함 <br />- 별도 컴포넌트로 분리한 Todo List Item을 map 메서드 활용하여 Todo List 렌더링 |
| 윤혜영 | - uesEffect 에서 getTodoList 함수를 이용해 API 데이터를 받아와 todos state로 관리<br />- todos state를 map으로 렌더링 |
| 조병현 | - tode 랜더링 시 useEffect 로 api 데이터 요청 후 요청값을 useState 배열로 리스트 관리<br />- 관리된 todo배열을 map() 을 통해 랜더 |
| 채하은 | - useEffect 로 페이지 마운트 시점에 서버에서 데이터를 받아와 todos 스테이트에 할당.  투두 배열을 map으로 렌더링 |
| 홍성욱 | - useEffect 를 사용하여 token이 존재할 경우 setState를 통해 todos state에 값을 할당, 이를 map으로 투두들을 하나씩 렌더링 |

#### **Best practice**
  
- useEffect로 최상위 페이지(투두 페이지) 마운트 시점에 todo 데이터를 요청해 state로 관리
- 데이터를 렌더링하는 부분은 페이지 컴포넌트에서 따로 분리
- state를 투두 아이템 컴포넌트로 맵핑하여 렌더

### **[Assignment 6] 투두 리스트 추가**

> - 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
> - 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
> - TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다

|  이름  | 의견 |
| ------ | --- |
| 성지현 | - /todo 경로의 children으로 투두 추가 기능을 처리할 라우트 객체(path: /todo/create)를 추가 <br />- 새로운 투두를 입력할 수 있는 인풋을 fetcher.Form으로 감싸고, submit 시 /todo/create에 해당하는 action 함수를 실행 <br />- action 함수에서 투두 인풋의 밸류가 빈 문자열이라면 submit 처리를 중단(return null)하고, 빈 문자열이 아니라면 api 요청 <br />- action이 실행되면 TodoPage의 loader가 실행되어 투두 목록 업데이트 |
| 신재일 | - 새롭게 추가된 Todo 내용은 useState로 관리되며 이를 서버로 전달하고 응답 성공 시 기존 Todo List에 응답 데이터 추가 |
| 윤혜영 | - AddTodo 컴포넌트에 onCreate 함수를 전달해 해당 함수를 통해 API 요청 <br />- 새롭게 만들어진 todo를 todos state 마지막 요소로 업데이트 해줌 |
| 조병현 | - input 내용 useState 로 저장 후 버튼 클릭 시 submit이벤트로 api요청, 해당 내용을 todo배열에 업데이트   |
| 채하은 | - handleSubmit 함수로 post 요청. 화면 렌더링을 위해 setTodos로 투두 배열 업데이트. inputRef 로 투두 작성 완료시 인풋에 다시 포커스 가게함 |
| 홍성욱 | - post 를 사용하여 todo 추가 기능 구현, setTodos를 통해 값 업데이트, 업데이트가 되면 input 값을 비워 새로운 값을 입력받을 수 있도록 구현 |

#### **Best Practice**

- 추가 버튼 클릭 시 인풋의 value로 post 요청 전송
- 인풋이 빈 문자열인 경우 전송하지 않음
- 요청에 대한 성공 응답으로 받은 투두 데이터를 기존에 관리하던 state에 concatenating하여 렌더
- 요청 실패 시 alert 창 띄우기 (`window.alert(err.response.data.message)`)
  - 사용자에게 실시간 피드백을 제공하여 무엇이 잘못되었는지 알려주기 위해 사용

### **[Assignment 7&10] 투두 리스트와 체크박스 수정**

> - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
> - 투두 리스트의 수정 기능을 구현해주세요

|  이름  | 의견 |
| ------ | --- |
| 성지현 | - /todo 경로의 children으로 투두 수정 기능을 처리할 라우트 객체(path: /todo/update)를 추가 <br />- 체크박스 or 제출 버튼 클릭 시 /todo/update에 해당하는 action 함수 실행 <br />- action 함수에서 투두 인풋의 밸류가 빈 문자열이라면 submit 처리를 중단(return null)하고, 빈 문자열이 아니라면 api 요청 <br />- 체크박스는 optimistic update, 제출 버튼을 통한 업데이트는 loader 실행되어 업데이트 |
| 신재일 | - debounce 활용하여 유저가 동작하는 마지막 체크박스 값을 서버로 전달 <br />- Todo 수정 서버 요청 성공 후 filter 메소드 활용하여 응답 값 id로 필터링하여 Todo List 기존 값과 교체 |
| 윤혜영 | - TodoCard에 onUpdate 함수를 전달해 체크박스 값이 변경되거나 수정 완료 버튼을 클릭하면 API 요청 <br />- 수정 후 getTodoList 함수를 실행해 전체 todo 목록을 다시 불러옴 |
| 조병현 | - 체크박스 클릭 시 api 요청 후 반영 <br />- 수정버튼 클릭 시 아이디와 내용을 인자로 전달하여 기존 내용 및 아이디를 불러오고 수정 후 제출하면 api 요청 후 반영 |
| 채하은 | - 체크박스 클릭 또는 확인 버튼 클릭시 onUpdate(handleUpdate) 함수 호출 <br />- 수정하려는 투두의 id와 일치하는 투두를 todos 배열에서 찾고, 만약 수정하려는 내용이 변경되지 않았다면 함수 실행 종료 <br />- updateTodo api 함수 호출해 데이터 업데이트. 그리고 setTodos로 투두 변경 내용 업데이트 |
| 홍성욱 | 체크박스 클릭시 useState를 통해 기존값과 반대값으로 변경, onUpdate 함수를 호출하여 id, todoText가 일치하는 투두의 체크박스 값을 변경 <br />- update를 사용, id, todoText를 동일, 체크여부에 따른 값 변경 |

#### **Best Practice**

- 제출 버튼 클릭 또는 체크박스 클릭 시 PUT 요청 전송
- 체크박스 클릭을 통한 PUT 요청은 단시간 다중 요청을 방지하기 위하여 디바운스 처리
- 요청 성공 응답으로 받은 투두의의 id에 해당하는 데이터를 관리하고 있던 state에서 업데이트
- 요청 실패 시 alert 창 띄우기 (`window.alert(err.response.data.message)`)
  - 사용자에게 실시간 피드백을 제공하여 무엇이 잘못되었는지 알려주기 위해 사용

### **[Assignment 8&9] 투두리스트 삭제**

> - TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
> - 투두 리스트의 삭제 기능을 구현해주세요
>   - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

|  이름  | 의견 |
| ------ | --- |
| 성지현 | - /todo 경로의 children으로 투두 삭제 기능을 처리할 라우트 객체(path: /todo/delete)를 추가 <br />- 삭제 버튼 클릭 시 /todo/delete에 해당하는 action 함수 실행 (api 삭제 요청) <br />- action이 실행되면 TodoPage의 loader 실행되어 업데이트 |
| 신재일 | - 삭제 서버 요청 성공 시 filter 메소드 활용하여 기존 Todo List에서 삭제된 Todo id 필터링하고 리스트 업데이트 |
| 윤혜영 | - TodoCard에 onDelete 함수를 전달해 삭제 버튼 클릭 시 API 요청 <br />- 삭제 후 getTodoList 함수를 실행해 전체 todo 목록을 다시 불러옴 |
| 조병현 | - 삭제버튼 클릭 시 해당 todo 아이디값을 삭제 요청 후 filter 메소드를 통해 반영 |
| 채하은 | - 삭제 원하는 투두의 id 값을 가져와 데이터 통신으로 삭제하고 filter 배열 메서드를 사용해 setTodos에 목록 반영 |
| 홍성욱 | - 삭제버튼 클릭시 지정된 id값을 delete 방식으로 삭제후 filter 메소드를 사용해서 삭제된 값을 배열에서 제거 |

#### **Best Practice**

- 삭제 버튼 클릭 시 DELETE 요청 전송
- 요청 성공 시 삭제하려는 투두 아이디를 state에서 filter하여 상태 업데이트 및 렌더
- 요청 실패 시 실패 시 alert 창 띄우기 (`window.alert(err.response.data.message)`)
  - 사용자에게 실시간 피드백을 제공하여 무엇이 잘못되었는지 알려주기 위해 사용

## 🗂️ 폴더 구조

```
root
└── src/
    ├── components/
    │   ├── common/
    │   └── domain/
    ├── hooks/
    ├── pages/
    ├── routes/
    ├── utils/
    └── apis/
```

## 💾 커밋 규칙 (commit convention)

- [Feat] 새로운 기능을 추가
- [Fix] 버그 수정
- [Design] CSS 등 사용자 UI 디자인 변경
- [!BREAKING] CHANGE 커다란 API 변경의 경우
- [!HOTFIX] 급하게 치명적인 버그를 고쳐야 하는 경우
- [Style] 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- [Refactor] 프로덕션 코드 리팩토링
- [Comment] 필요한 주석 추가 및 변경
- [Docs] 문서 수정
- [Test] 테스트 코드, 리팩토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음
- [Chore] 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음
- [Rename] 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- [Remove] 파일을 삭제하는 작업만 수행한 경우
- [Type] 타입 수정

