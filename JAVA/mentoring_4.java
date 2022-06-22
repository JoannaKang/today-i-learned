import java.util.*;

class Main {

  static void devideNumber (String userInput) throws ArithmeticException, NumberFormatException {
    int num = Integer.parseInt(userInput);
    System.out.println("User input = " + num);
    int result = 100 / num;
    System.out.println("100 divided by " + num + " = " + result);
  }
  
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a number: ");
    String userInput = scanner.nextLine();

    try {
      devideNumber(userInput);
      } catch ( ArithmeticException | NumberFormatException e ) {
      System.out.println(e.getMessage());
    } finally {
      System.out.println("종료되었습니다.");
    }
  }
}