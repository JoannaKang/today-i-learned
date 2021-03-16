{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low'
  };

  // Use for utility type 'Partial': 기존의 타입중에서 부분적인 property만 변경 가능하도록 허용하고싶을때
  function updateTodo (todo: ToDo, filedsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...filedsToUpdate }
  };

  const todo: ToDo = {
    title: 'learn typescript',
    description: 'study hard',
    label: 'study',
    priority: 'high'
  };

  const updated = updateTodo(todo, { priority: 'low' }); // 타입이  Partial로 선언된 경우 priority만 변경 할수도 있음
  console.log(updated);
}