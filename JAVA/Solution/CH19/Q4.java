package FileIO;

import java.io.File;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.Charset;

public class Q4 {
    public static void main(String[] args) throws IOException {
        File file = new File("file1.txt");
        InputStream is = new FileInputStream(file);
        byte[] byteArray = new byte[6];
        int count;
        while ((count = is.read(byteArray)) != -1) {
            String str = new String(byteArray, 0, count, Charset.forName("UTF-8"));
            System.out.println(str);
            System.out.println(count);
        }
    }
}
