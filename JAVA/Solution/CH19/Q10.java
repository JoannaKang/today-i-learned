package FileIO;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;

public class Q10 {
    public static void main(String[] args) throws IOException {
        Reader reader = new InputStreamReader(System.in, "UTF-8");
        int data;
        while ((data = reader.read()) != '\r') {
            System.out.print((char) data); }
    }
}
