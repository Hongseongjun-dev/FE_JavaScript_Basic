/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    
    for (let a = 0; a < num_list.length; a++){
        if (num_list[a] % 2 === 1){
            even += 1;
        }
        else{
            odd += 1;
        }
    }
    answer = [odd, even];
    
    return answer;
}