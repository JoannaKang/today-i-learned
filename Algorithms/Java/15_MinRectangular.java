import java.util.Arrays;

class Solution {
    public int solution(int[][] sizes) {
        int arrSize = sizes.length;
        int[] widthItems = new int[arrSize];
        int[] heightItems = new int[arrSize];
        
        for (int i = 0; i < sizes.length; i++) {
            Arrays.sort(sizes[i]);
            widthItems[i] = sizes[i][0];
            heightItems[i] = sizes[i][1];
        }
        
        Arrays.sort(widthItems);
        Arrays.sort(heightItems);
       
        int width = widthItems[widthItems.length-1];
        int height = heightItems[widthItems.length-1];
       
        return width*height;
    }
    
    private void print (int[] arr) {
        for(int i=0; i< arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}

// In js
// function solution(sizes) {
//    const sorted = sizes.map(size => size.sort((a,b) => a-b))
    
//    const widthItems = sorted.map(item => item[0])
//    const heightItems = sorted.map(item => item[1])

//    const answer = Math.max(...widthItems) * Math.max(...heightItems)
    
//    return answer;
// }