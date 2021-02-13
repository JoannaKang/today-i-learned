interface Stack {
  push(item:string):void
  pop():string
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

class setStack implements Stack {
  private _size:number = 0;
  private head?: StackNode;
  
  constructor(private capacity: number) {}
  get size () {
    return this._size;
  }
  
  push(value:string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!')
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  
  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty!')
    }
    const node = this.head;
    this.head = node.next;
    this._size --;
    return node.value;
  }
}

const stack = new setStack(10)
stack.push('hello')
stack.push('world')
stack.push('lol')
while (stack.size !== 0) {
  console.log(stack.pop())
}

stack.pop();