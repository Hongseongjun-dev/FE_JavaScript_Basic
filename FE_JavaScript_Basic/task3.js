/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    var answer = 1;
    
    for (var i = 1 ; i <= n; i++ ){
        answer *=i;
        if (answer === n){
            return i;
        }
        if(answer > n){
            return i-1;
        }
    }
}