package FileIO;
import java.io.File;

public class Q2 {
    public static void main(String[] args) {
        File file = new File("mydata/result.txt");
        System.out.println(file.getAbsolutePath());
    }
}
