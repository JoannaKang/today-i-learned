class Solution {
  public void reverseString(char[] s) {
      char text;
      for (int i = 0; i<s.length/2; i++) {
          text = s[i];
          s[i] = s[s.length-1-i];
          s[s.length-1-i] = text;
      }
  }
}


class Solution {
  public List<String> fizzBuzz(int n) {
      List<String> output = new ArrayList<String>();
      for (int i=1; i <= n; i++) {
          if ( i % 15 == 0) {
              output.add("FizzBuzz");
          } else if (i % 3 == 0) {
              output.add("Fizz");
          } else if (i % 5 == 0) {
              output.add("Buzz");
          } else {
            output.add(Integer.toString(i));
          }
      }
      return output;
  }
}

class Solution {
  public boolean isPalindrome(String s) {
      char[] joined = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase().toCharArray();
      for (int i=0; i<joined.length/2; i++) {
          if(joined[i]!=joined[joined.length-1-i]) {
              return false;
          }
      }
      return true;
  }
}

import java.util.ArrayList;
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        ArrayList data = new ArrayList();
        int po1 = 0;
        int po2 = 0;
            
        for (int i=0; i < nums1.length; i++) {
            if(po2 >= n || (nums1[po1] < nums2[po2] && po1 < m)) {
                data.add(nums1[po1] );
                po1++;
            } else {
                data.add(nums2[po2]);
                po2++;
            }
        }
        for (int i=0; i< nums1.length; i++) {
            nums1[i] = (int) data.get(i); 
        }
    }
}

class Solution {
    public int fib(int n) {
        if (n == 0 ){
            return 0;
        } else if (n==1) {
            return 1;
        } else {
            return fib(n-1) + fib(n-2);
        }
    }
}