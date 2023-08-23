# Best Practice of Wanted Pre-onboarding Assignment

[원티드 프리온보딩 프론트엔드 인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 best practice를 제작한 프로젝트입니다.

## Information

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

> - 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
>   - 이메일 조건: `@` 포함
>   - 비밀번호 조건: 8자 이상
> - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

#### [Assignment 2&3] 페이지 이동 및 JWT 관리

> - 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
> - 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
>   - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
>   - 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### [Assignment 4] 리다이렉트

> - 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
> - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
> - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

#### [Assignment 5] 투두 리스트 목록과 체크박스

> - `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
> - 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
> - TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요

#### [Assignment 6] 투두 리스트 추가

> - 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
> - 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
> - TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다

#### [Assignment 7&10] 투두 리스트와 체크박스 수정

> - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
> - 투두 리스트의 수정 기능을 구현해주세요

#### [Assignment 8&9] 투두리스트 삭제

> - TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
> - 투두 리스트의 삭제 기능을 구현해주세요
>   - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

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

## 팀 소개

| 성지현                                    | 신재일                                  | 윤혜영                                            | 조병현                                            | 채하은                                      | 홍성욱                                |
| ----------------------------------------- | --------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------- | ------------------------------------- |
| [@jhsung23](https://github.com/jhsung23/) | [@JaeIl00](https://github.com/JaeIl00/) | [@creamy-ocean](https://github.com/creamy-ocean/) | [@ChoByungHyun](https://github.com/ChoByungHyun/) | [@chaehaeun](https://github.com/chaehaeun/) | [@ukssss](https://github.com/ukssss/) |
| 초기 프로젝트 셋팅                        | api 요청 및 응답 처리                   | todo CRUD                                         | 로그인                                            | 회원가입                                    | route 및 global layout                |
