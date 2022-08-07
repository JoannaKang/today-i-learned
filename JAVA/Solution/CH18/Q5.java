package Lambda;

public class Q5 {

    interface A {
        double[] abc(int len);
    }

    public static void main(String[] args) {
        A a = double[]::new;
        System.out.println(a.abc(10));
    }

}
