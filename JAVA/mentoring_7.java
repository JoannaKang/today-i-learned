import java.util.*;
import java.io.*;

public class mentoring_7 {

  public static void main(String[] args) {
    File file = new File("test.txt");
    try {
      // test.txt 라인마다 읽은 뒤 각 라인의 길이 출력 (BufferedReader 사용) 
      Reader reader = new FileReader(file);
      BufferedReader br = new BufferedReader(reader);

      Integer totalLength = 0;
      String data;
      while((data=br.readLine()) != null) {
        System.out.println(data + ' ' + data.length());
        totalLength += data.length();
      }

      /*
        Sample output:
        안녕 2
        this 4
        is 2
        a 1
        test 4
        file 4
        끝 1
      */
      
      // 끝까지 읽은 후, 파일 마지막줄에 모든 라인의 길이 총합 입력 (FileWriter 사용)
      // "Total length: 18"이라고 들어가야 함
      Writer write = new FileWriter(file, true);
      BufferedWriter bw = new BufferedWriter (write);
      bw.write("\n");
      bw.write("Total length:"+ ' ' + totalLength);
      bw.flush();
    } catch (IOException e) {
      System.out.println("Error!");
    }
  }
}

