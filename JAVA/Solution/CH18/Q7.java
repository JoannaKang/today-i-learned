package Lambda;

public class Q7 {
    static class B {
        void bcd(int k) {
            System.out.println(k); }
    }

    // 답...왜..?
    interface A {
        void abc(B b, int k);
    }

    public static void main(String[] args) {
        A a = B::bcd;
        B b = new B();
        a.abc(b, 3);
    }
}
