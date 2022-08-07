package FileIO;
import java.io.UnsupportedEncodingException;
public class Q5 {
    public static void main(String[] args) throws UnsupportedEncodingException {
        byte[] a = "안녕하세요".getBytes("UTF-8");
        // offset : 어레이에서의 시작위치, length : 읽을 바이트 수 , 한글은 3바이트이므로 3글자를 읽음
        String b = new String(a, 6, 9, "UTF-8");

        System.out.println(b); // 하세요
    }
}
