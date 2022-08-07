package FileIO;

import java.io.File;

public class Q1 {
    public static void main(String[] args) {
        String separator = File.separator;
        String path = "D:"+separator+"abc"+separator+"bcd"+separator+"cde.txt";
        System.out.println(path);
    }
}
