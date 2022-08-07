package FileIO;
import java.io.UnsupportedEncodingException;

public class Q3 {
    public static void main(String[] args) throws UnsupportedEncodingException {
        byte[] a = "abc가나다".getBytes("MS949");
        byte[] b = "abc가나다".getBytes("UTF-8");
        // MS949: 한글은 2 영문은 1
        // UTF-8 에서는 한글은 3byte 영문은 1바이트
        System.out.println(a);
        System.out.println(b); // 9
        System.out.println(b.length); // 12
    }

}
