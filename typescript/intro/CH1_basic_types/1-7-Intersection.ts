{
  // *Intersection Types: &같은 개념
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) { // Student와 Worker의 Intersection type
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({ // Student와 Worker 둘 다의 타입을 가지고 있어야 함
    name:'ellie',
    score: 1,
    employeeId: 123,
    work: () => {}
  })
}