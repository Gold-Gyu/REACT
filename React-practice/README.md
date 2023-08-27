state는 주로 변동 시 자동으로 HTml에 반영(재랜더링)되게 만들고 싶을 때 사용
state변경함수 특징 => 기존 State == 신규 State면 변경해주지 않음
Array/object 특징 : array/object 담은 변수에 메모리에 어디에 저장되어있는지 화살표(가르킴)로 저장됨
기존 State와 신규 State가 같은 메모리에 저장되어있다면 변경 x
정리 : state가 array/object면 독립적인 카피본을 만들어서 수정해야한다. 그 이유는 State가 기존 State로 인식하지 않아야하기 떄문

# 동적 UI 만드는 step
1. HTML CSS로 미리 디자인 완성
2. UI 현재 상태를 state로 저장
3. state따라 어떻게 UI가 보일지 작성

# Input에 입력한 값 가져오기
- 유저 입력한 값을 저장해야한다.(state or 변수)
- **unshift** 명령어 사용시 맨 앞에 생성
# 이벤트버블링
=> 클릭 이벤트는 상위 HTML로 퍼진다.
### 해결 방법
=> stopPropagation