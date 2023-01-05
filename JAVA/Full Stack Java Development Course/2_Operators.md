# Operators

1. Simple Operators
  - Unary Operator : require only one operand Const /variable
    - ++i, i++, --i, i--
  - Arithmetic Operator
    - +, -, *, /, %
  - Shift Operators
    - << less than
    - ```>>``` Greater than
  - Relational Operators
    - Used to check the relation between two operands, return boolean as result
    - = , != (Equal, not equal)
    - <, <=  (less, less than)
    - ```>``` , >= (greater, greater than)
  - Bitwise Operator
    - & (AND)→ both should be 1
    - | (OR)→ At least one value should be 1
    - ^ (XOR) → Check If bits are same 0 not the same 1
    - ~ (Not) → Reverse the result
    
      ```java
      M1 = 0011 1100
      M2 = 0000 1101
      
      M1 & M2 = 0000 1100 -> 
      M1 | M2 = 0011 1101
      M1 ^ M2 = 0011 0001
      ~M1 = 1100 0011
      ```
      
2. Logical Operators
  - && Logical AND: Return true when both conditions are true
  - || Logical OR : Return false when both conditions are false
  - ! Logical NOT : Used to reverse the logical state
    
3. Ternary Operator
  - Has three operands , shorthand version of if else statement
  
    ```java
    condition ? true : false
    ```
      

1. Assignment Operator
- += , -=