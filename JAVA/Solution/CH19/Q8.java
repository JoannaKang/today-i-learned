package FileIO;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintStream;

public class Q8 {
    public static void main(String[] args) {
        try (OutputStream os = System.out;
             PrintStream ps = new PrintStream(os)) {
            ps.print("안녕");
            ps.print("abc" + "방가" + "\n");
            ps.printf("%s ", "땡큐").printf("%f %d", 3.5, 7);
        } catch (IOException e) {}
    }
}
