# Best Practice of Wanted Pre-onboarding Assignment

[원티드 프리온보딩 프론트엔드 인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 best practice를 제작한 프로젝트입니다.

## Information

- 배포 주소: https://pre-onboarding-12th-1-3.vercel.app

### 프로젝트 실행 방법

본 repository를 clone한 다음 프로젝트 폴더 경로에서 다음 명령어를 실행하면, 개발 환경에서의 React App을 실행하실 수 있습니다.

```
npm install
npm start
```

브라우저가 자동으로 실행되지 않는다면 `http://localhost:3000`에 직접 접속해 주세요.

### 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
</div>

### 기능 상세

#### [Assignment 1] 유효성 검사

<details>
  <summary>요구사항 및 Best Practice</summary>
  <div markdown="1">

요구사항

    - 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
      - 이메일 조건: `@` 포함
      - 비밀번호 조건: 8자 이상
    - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

##### Best Practice

    - 공통 UI 컴포넌트 재사용
    - Input Value, Validation 상태 관리 커스텀훅 생성 및 재사용
      - 중복되는 로그인과 회원가입 form이 불필요하게 나뉘는 것을 방지하기 위해 공통 UI컴포넌트 및 Input Value, Validation 상태 관리 커스텀훅 사용.
    - debounce 사용하여 Validation 상태 업데이트
      - 불필요한 Validation검사가 많아지는 것을 방지하기 위해 debounce 커스텀 훅 생성 및 재사용.

  </div>
</details>

#### [Assignment 2&3] 페이지 이동 및 JWT 관리

<details>
  <summary>요구사항 및 Best Practice</summary>
  <div markdown="1">
    
    - 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
    - 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
    - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    - 응답받은 JWT는 로컬 스토리지에 저장해주세요
    
  </div>
</details>

#### [Assignment 4] 리다이렉트

<details>
  <summary>요구사항 및 Best Practice</summary>
  <div markdown="1">
    
    - 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
    - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
    - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요
    
  </div>
</details>

#### [Assignment 5] 투두 리스트 목록과 체크박스

<details>
  <summary>요구사항 및 Best Practice</summary>
  <div markdown="1">
    
    - `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
    - 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
    - TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
    
  </div>
</details>

- api 폴더에 있는 todoApi.get 함수를 통해 유저에게 등록된 TODO 데이터를 받아옵니다.
- 투두리스트를 관리하기 위한 커스텀 훅 useTodoList을 만들었으며, 해당 훅이 리턴하는 getTodos 함수가 위 todoApi.get 함수를 포함하고 있습니다.
- /todo에 접속하여 TodoPage 컴포넌트가 마운트되면 커스텀 훅 useTodoList를 호출합니다. 이어서useEffect 훅의 콜백으로 getTodos 함수를 실행합니다.
- 요청에 성공하면 받은 데이터를 todoList state에 저장합니다.
- todoList라는 상태에 저장된 데이터를 TodoList가 받아 각각의 TODO 데이터를 TodoItem 매핑하여 렌더링합니다.

#### [Assignment 6] 투두 리스트 추가

<details>
  <summary>요구사항 및 Best Practice</summary>
  <div markdown="1">
    
    - 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
    - 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
    - TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다
    
  </div>
</details>

- AddTodoForm 컴포넌트는 TodoPage에서 호출한 커스텀 훅의 addTodo 함수를 prop으로 내려받으며, 추가할 TODO를 입력 받는 역할을 합니다.
- 이때 TODO가 빈 문자열이 아니라면 추가 버튼이 활성화되고, 해당 버튼을 누르면 POST 요청을 전송합니다. 또한, 인풋은 초기화됩니다.
- POST 요청에 성공하면, addTodo 함수에 응답 데이터를 파라미터로 넣어 호출하며 결과적으로 커스텀훅 내부에서 관리하는 todoList 상태가 업데이트됩니다.
- todoList 상태가 업데이트되면서 TodoList 컴포넌트가 새로운 TODO 데이터로 리렌더링됩니다.

#### [Assignment 7&10] 투두 리스트와 체크박스 수정

<details>
  <summary>요구사항 및 Best Practice</summary>
  <div markdown="1">
    
    - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
    - 투두 리스트의 수정 기능을 구현해주세요
    
  </div>
</details>

- TodoItem 컴포넌트는 TodoPage에서 호출한 커스텀 훅의 modifyTodo 함수를 prop으로 내려받습니다.
- 이때 TODO가 빈 문자열이 아니라면 제출 버튼이 활성화되고, 제출 버튼 또는 체크박스를 클릭할 때 PUT 요청을 전송합니다.

#### [Assignment 8&9] 투두리스트 삭제

<details>
  <summary>요구사항 및 Best Practice</summary>
  <div markdown="1">
    
    - TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
    - 투두 리스트의 삭제 기능을 구현해주세요
      - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요
    
  </div>
</details>

### 폴더 구조

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

### 커밋 규칙 (commit convention)

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

## 팀 소개

| 성지현                                    | 신재일                                  | 윤혜영                                            | 조병현                                            | 채하은                                      | 홍성욱                                |
| ----------------------------------------- | --------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------- | ------------------------------------- |
| [@jhsung23](https://github.com/jhsung23/) | [@JaeIl00](https://github.com/JaeIl00/) | [@creamy-ocean](https://github.com/creamy-ocean/) | [@ChoByungHyun](https://github.com/ChoByungHyun/) | [@chaehaeun](https://github.com/chaehaeun/) | [@ukssss](https://github.com/ukssss/) |
| 초기 프로젝트 셋팅                        | api 요청 및 응답 처리                   | todo CRUD                                         | 로그인                                            | 회원가입                                    | route 및 global layout                |
