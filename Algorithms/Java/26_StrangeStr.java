class Solution {
    public String solution(String s) {
        String answer = "";
        
        int counter = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (counter % 2 == 0) {
                char swapedChar = swapCase(s.charAt(i));
                String str = String.valueOf(swapedChar);
                answer += str;
            } else {
                answer += s.charAt(i);
            }
            
            counter++;
            
            if (s.charAt(i) == 32) {
                counter = 0;
            }
            

        }
        return answer;
    }
    
    private char swapCase(char c) {
        if(c >= 97 && c <=122) {
            return (char)(c - 32);
        } else if(c >= 65 && c <= 90){
            return (char)(c + 32);
        } else {
            return c;
        }
    }
}