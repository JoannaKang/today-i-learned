import java.lang.*;
import java.util.*;

class Solution {
    public boolean solution(String s) {
        for(int i=0; i< s.length(); i++) {
            int c = s.charAt(i);
            System.out.println(c);
            if(Character.isLetter(c)) {
                return false;
            }
        }
        return true;
    }
    
    private void print (List<String> arr) {
        for(int i=0; i< arr.size(); i++) {
            System.out.println(arr.get(i));
        }
    }
}