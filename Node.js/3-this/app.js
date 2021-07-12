function hello () {
  console.log('---function scope---')
  console.log(this)
  console.log(this === global)
}

hello();


class A {
  constructor(num) {
    this.num = num
  }

  memberFunction () {
    console.log('---in class---')
    console.log(this)
    console.log(this === global)
  }
}

const a = new A(1);
a.memberFunction();

console.log('----global scope---')
console.log(this);
console.log(this === module.exports);

