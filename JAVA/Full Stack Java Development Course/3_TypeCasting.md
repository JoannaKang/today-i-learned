# Type Casting

- Converting any primitive datatype into another
- Widening
  - Converting a lower datatype to a higher datatype
  - Byte → Short → Int → Long → Float → Double
        
        ```java
        char c = 'F'
        int v = c
        
        System.out.println(v) -> 70 (F의 아스키코드 값)
        ```
        
- Narrowing
  - Converting a higher datatype to a lower datatype
  - Double → Float → Long → Int → Short → Byte