package FileIO;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.nio.charset.Charset;

public class Q9 {
    public static void main(String[] args) throws IOException {
        File file3 = new File("file3.txt");
        try(Writer writer = new FileWriter(file3)) {
            writer.write("Hi\n".toCharArray());
            writer.flush();
        }
        File file4 = new File("file4.txt");
        try(Writer writer = new FileWriter(file4)) {
            writer.write("반갑습니다\n".toCharArray());
            writer.flush(); }
    }
}
