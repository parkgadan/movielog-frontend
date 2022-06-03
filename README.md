# movielog-client
- 영화 사이트


## 목차
- [기술](#기술)
- [구현](#구현)
	- [메인](#메인) 
	- [가입](#가입)
	- [로그인](#로그인)
	- [프로필](#프로필)
	- [영화상세](#영화상세)
	- [리뷰작성](#리뷰작성)
	- [영화주문](#영화주문)
	- [리뷰](#리뷰)
	- [MY](#MY)
	- [내리뷰](#내리뷰)
	- [구매내역](#구매내역)
	- [파일](#파일)
- [트러블슈팅](#트러블슈팅)
- [학습내용](#학습내용)
- [도움](#도움)


## 기술
- React


## 구현

### 메인
![movielog](https://user-images.githubusercontent.com/90893596/171790921-98db7841-9af3-41a3-a0f7-cbeb9e40ff66.png)

### 가입
![ImgGIF-20220511204897](https://user-images.githubusercontent.com/90893596/167843851-e06faa68-bb77-499c-852f-235c81ca742c.gif)

### 로그인
![image](https://user-images.githubusercontent.com/90893596/167973289-4bda9355-c609-4042-aa06-8fa38f1556a3.png)

### 프로필
![ImgGIF-202205141447109110](https://user-images.githubusercontent.com/90893596/168412675-a9a68fc2-eb09-4e39-8274-948784379c09.gif)

### 영화상세
![image](https://user-images.githubusercontent.com/90893596/167378031-9e53e58f-b345-4567-8d55-81b28b89c78c.png)

### 리뷰작성
![image](https://user-images.githubusercontent.com/90893596/167524838-32be1fad-c975-44e8-9a81-51592d18bc47.png)

### 영화주문
![image](https://user-images.githubusercontent.com/90893596/168042457-225f6fb3-8912-47b6-94bf-2876e73e1838.png)

### 리뷰
![image-20220514214437004](C:/Users/user/AppData/Roaming/Typora/typora-user-images/image-20220514214437004.png)

### MY
![image](https://user-images.githubusercontent.com/90893596/168456577-e3bd7981-2da1-4ab4-a163-8ce3bfaebb4c.png)

### 내리뷰
![ImgGIF-202205161707126](https://user-images.githubusercontent.com/90893596/168551965-ed1bb322-e068-4483-b8bb-d0d81f84652a.gif)

### 구매내역
![image](https://user-images.githubusercontent.com/90893596/168753932-0a817226-be26-4a7b-a630-a860f6736c7a.png)

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
- [개발일지](https://dannsgo.com/tags/#movielog)
- react router v6
- axios를 이용한 api 작성
- custom hook 사용


## 도움
- [hayjo](https://github.com/hayjo)
