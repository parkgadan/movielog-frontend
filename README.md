# movielog-client
- 영화 사이트


## 목차
- [기술](#기술)
- [구현](#구현)
	- [파일](#파일)
- [트러블슈팅](#트러블슈팅)
- [학습내용](#학습내용)
- [도움](#도움)


## 기술
- React


## 구현

### 파일

**src**
|파일|내용|
|---|---|
|setupProxy.jsx|proxy 설정|
|App.jsx|react-router-dom v6 사용|

**src/components**
|폴더|내용|
|---|---|
|Header|헤더|
|Join|헤더 > 가입 - 유효성, 중복체크|
|Login|헤더 > 로그인|
|Main|메인 페이지|
|MovieDetail|메인 > 영화 상세페이지|
|MovieOrder|메인 > 영화 상세페이지 > 영화 주문페이지|
|My|헤더 > My|
|MyOrder|헤더 > My > 주문내역|
|MyReview|헤더 > My > 내 리뷰|
|OrderInfo|헤더 > My > 주문내역 > 주문 상세페이지|
|Profile|헤더 > 프로필 - 닉네임 수정, 탈퇴|
|ReviewBoard|헤더 > 리뷰 - 리뷰 게시판|
|ReviewEdit|헤더 > 내 리뷰 - 리뷰 수정, 삭제|
|ReviewWrite|메인 > 영화 상세페이지 

**src/hooks**
|파일|내용|
|---|---|
|useInput.jsx|회원가입 유효성|


## 트러블슈팅

### api

**문제**

-  홈 & 상페이지를 제외한 api 에러

**해결**

- `setupProxy.js` 재설정
- api url 모두 변경

**문제**

- 권한 관련 회원 기능이 안됨

**해결**

- api `header`에 `token` 입력


## 학습내용
- react router v6
- axios를 이용한 api 작성
- custom hook 사용


## 도움
- [hayjo](https://github.com/hayjo)
