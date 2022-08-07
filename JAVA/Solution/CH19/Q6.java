package FileIO;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

public class Q6 {
    public static void main(String[] args) throws IOException {
        OutputStream os = System.out;
        byte[] a = "안녕하세요".getBytes("UTF-8");
        os.write(a, 0, a.length);
        os.flush();

    }
}
