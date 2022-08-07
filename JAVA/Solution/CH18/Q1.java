package Lambda;

interface A {
    void abc(double v);
}


public class Q1 {
    public static void main(String[] args) {
/*        A a = new A() {
            public void abc (double k) {
                System.out.println(k+0.5);
            }
        };*/

        A a = (double k) -> {System.out.println(k+0.5);};
        a.abc(0.5);
    }

}


