package Lambda;

public class Q3 {

    interface A {
        double abc(int k);
    }

    static class B {
        double bcd(int k) {
            return k * 0.1;
        }
    }

    public static void main(String[] args) {
/*        A a = new A() {
            @Override
            public double abc (int k) {
                B b = new B();
                return b.bcd(k);
            }
        };*/
        B b = new B();
        A a =  b::bcd;

        double res = a.abc(100);
        System.out.println(res);
    }

}
