nextjs typescript tailwindcss themoviedbAPI



# 정규 표현식 (Regular Expression / RegEx)
/..표현식../ 안쪽에 정규표현식 입력해서 문자의 조건을 매칭


## ^ 
(무조건 이거로 시작)
/^[0-9]/ : 무조건 숫자로 시작


## $ 
(문자의 종료조건을 알리는 표현식)
/ [a-z]$/ : 무조건 소문자로 끝남


## [] 
(문자의 조건 범위를 지정하는 표현식)
/[a-z]/ : 모든 소문자 범위 
/[0-5]/ : 0~5 사이 숫자만 등록가능


## .
(모든 문자를 다 허용하는 표현식)


## *
(이전 조건의 값이 0번 이상 반복처리)
[a-z]* : 소문자가 0번 이상 있어야됨. 없어도 그만


## +
(이전 조건의 값이 무조건 1번 이상 반복 처리)
[A-Z]+ : 대문자가 무조건 1번 이상 있어야됨


## ()
(여러가지 조건을 그룹화 함.)
([a-z][0-9]) : 모든 소문자, 모든 숫자를 허용. - 소문자 하나가 있거나 숫자가 하나 있거나


## ?
(이전 조건을 선택사항 처리)
@? : @가 있어도 그만 없어도 그만


## {최소글자, 최대글자}
(최소글자와 최대글자 설정)
(정규표현식 패턴){3, 10} : 해당 패턴을 적용해서 최소 3글자 이상 10글자 미만의 글자수 범위 지정


## (?=)패턴
(전방탐색자. 해당 패턴이 무조건 있어야 되고 해당 패턴을 기준으로 앞의 값을 탐색)


## (?<=)패턴
(후방탐색자. 해당 패턴이 무조건 있어야 되고 해당 패턴을 기준으로 뒤의 값을 탐색)