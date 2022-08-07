package Lambda;

public class Q4 {
    interface A {
        int abc(String str);
    }


    A a = new A() {
        @Override
        public int abc(String str) {
            return Integer.parseInt(str);
        }
    };

    public static void main(String[] args) {
        A a = Integer::parseInt;
        System.out.println(a.abc("100"));
    }
}
