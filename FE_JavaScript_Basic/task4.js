/* 4번 문제 답안을 작성해주세요. */
function solution(M, N) {
    var answer = 0;
    
    if(M>0 && N>0){
    answer = (M-1) + (N-1)*M
    }

    return answer;
}