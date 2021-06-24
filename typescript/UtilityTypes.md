# Partial<Type>

- Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

```
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

-> 타입을 가져다 쓰되 일부만 가져다 쓸 수 있음

# Required<Type>

- Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

```
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
//-> This will throw error
```

-> 타입을 가져다 쓰면 모든 key를 필수적으로 써야 함

# Omit<Type, Keys>

- Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit <Todo, "description">;
// -> Todo의 타입을 그대로 가져오는 대신 description은 빼고 새로운 타입을 정의함

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;
// 두개의 key를 제거할수도 있다.

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
```

# Pick<Type, Keys>

- Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
// -> Todo 타입에서 title, completed만 가져옴

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```
