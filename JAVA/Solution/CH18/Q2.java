package Lambda;

public class Q2 {
    interface A {
        int abc(String str);
    }

    public static void main(String[] args) {
        A a = new A() {
            public int abc(String str) {
                return str.length();
            }
        };

        // 같은코드
        // A a = str -> str.length();
        int b = a.abc("String");
        System.out.println(b);
    }
}
