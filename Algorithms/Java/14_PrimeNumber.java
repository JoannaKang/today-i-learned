class Solution {
    public int solution(int n) {
        int answer = 0;
        for (int i = 2; i <= n; i++) {
            if(isPrime(i)) {
                answer++;
            }           
        }
        return answer;
    }
    
    private boolean isPrime (int number) {
        for(int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}