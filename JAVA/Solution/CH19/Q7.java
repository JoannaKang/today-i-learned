package FileIO;

import java.io.*;

public class Q7 {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("file2.dat");

        FileOutputStream fos = new FileOutputStream(file);
        BufferedOutputStream bos = new BufferedOutputStream(fos);
        DataOutputStream dos = new DataOutputStream(bos);

    }
}
