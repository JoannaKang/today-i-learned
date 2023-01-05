# Java

- Basic data type


- Constants : value cannot change once it has been assigned , create 1 fixed value

```java
Static final double rate = 586.78
```

- Enumeration : Using create set of constant value

```java
Public class Enumeg {
	public enum colorsofrainbow { Violet, Blue.....}

	public static void main(String[] args) {
		for (colorsofrainbow m: colorsofrainbow.values())
		System.out.println(m)
	}
}
```

- literal : A source code representation of a fixed value

```java
int product = 800
data type     literal
```

- Conventions
  - Every identifier should begin with a letter (Class, Function, method, variable name…)
  - After the first character, identifiers can have any kind of combinations
  - Identifiers are case sensitive
  - Reserved keyword cannot be used as identifier
  - Constants must be in uppercase with the words seperated by underscores
  - Object name must start with a lower case and long names musst be declared with camer case
  - Package name’s prefix should always be written in all lowercase ASCII letters and separated by dot