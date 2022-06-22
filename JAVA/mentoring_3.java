import java.util.*;

class Main {
  static class Account {
    int accountNumber;
    double balance;

    Account(int accountNumber, double balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
    
    void deposit(double amount) {
      balance += amount;
    }

    void withdraw(double amount) {
      balance -= amount;
    }

    @Override
    public String toString() {
      return "Account " + accountNumber + ": " + "balance = " + balance;    
    }
  }

  static class SavingsAccount extends Account {
    SavingsAccount (int accountNumber, double balance) {
      super(accountNumber, balance);
    }
    @Override
    void deposit(double amount) {
      balance += amount*1.1;
    }
  }

  static class SmartAccount extends Account {
    SmartAccount(int accountNumber, double balance) {
      super(accountNumber, balance);
    }

    @Override
    void withdraw(double amount) {
      if (amount > 10000) {
        System.out.println("Warning!!");
      } else {
        balance -= amount;
      }
    }
  }

  static class Bank {
    List<Account> accounts;

    Bank(List<Account> accounts) {
      this.accounts = accounts;
    }

    void generateBankStatement() {
      double total = 0 ;
      for (Account account : accounts) {
        System.out.println("account balance:" + account.balance);
        total += account.balance;
      }
      System.out.println("total balance:"+ total);
    }
  }

  // SavingsAccount -> interest 10%
  // SmartAccount -> withdrawal limit £10000
  
  // Bank -> has all the accounts
  // List<Account> accounts
  // generateBankStatement() -> shows balance of each account and total balance
  
  public static void main(String[] args) {
    SavingsAccount account = new SavingsAccount(100, 100);
    account.deposit(50);
    System.out.println(account);

    SmartAccount account2 = new SmartAccount(110, 10000);
    account2.withdraw(9000);
    System.out.println(account2);

    Account account3 = new Account(111, 0);
    account3.deposit(100);
    account3.withdraw(50);
    System.out.println(account3);

    List<Account> accountList = List.of(account, account2,account3);
    Bank bank = new Bank(accountList);
    bank.generateBankStatement();
  }
}public class mentoring_3 {
  
}
