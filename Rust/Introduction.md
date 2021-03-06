1. Variables and Mutabilty

- Declar variables with let / const
  - Can't reassign value when variables are declared with let
  - Can make variable mutable by adding mut after variable declaration
  ```
  fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
  }
  ```
  - Constants can be declared in any scope, including the global scope, which makes them useful for values that many parts of code need to know about.
  - the type of the value must be annotated
  ```
  const MAX_POINTS: u32 = 100_000;
  ```

2. Data types

---

(1) Scalar type: represents a single value

- Integers: u8 / u16 / u32 / u64 / u128 / usize
- Floating-points: f32 / f64

  ```
  fn main() {
    let x = 2.0; // f64

    let y: f32 = 3.0; // f32
  }
  ```

- Booleans

  ```
  fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
  }
  ```

- Characters

(2) Compound types: Compound types can group multiple values into one type.

- Tuple type: Tuples have a fixed length: once declared, they cannot grow or shrink in size.
  ```
  fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
  }
  ```
- Array type
  - every element of an array must have the same type
  - arrays in Rust have a fixed length, like tuples.
  ```
  let a: [i32; 5] = [1, 2, 3, 4, 5];
  ```

3. Struct

- A type that is composed of other types.
- Structs in Rust come in three flavors

  - Structs with named fields,
  - tuple structs
  - unit structs.

- How to instantiate
  ```
  let example = Foo {
      field1: 42.0,
      field2: "blah".to_string(),
      etc: true,
  };
  ```

4. Enum

- The enum keyword allows the creation of a type which may be one of a few different variants

Panic?

- This allows a program to terminate immediately and provide feedback to the caller of the program. panic! should be used when a program reaches an unrecoverable state.
