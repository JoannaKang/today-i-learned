import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public int solution(int[] d, int budget) {
        Arrays.sort(d);
        
        int answer = 0;
        int totalBudget = budget;
        
        for (int i = 0 ; i < d.length; i++) {
            totalBudget -= d[i];
            
            if (totalBudget >= 0 ) {
                answer ++;
            } else {
                break;
            }
        }
        
        return answer;
    }
}