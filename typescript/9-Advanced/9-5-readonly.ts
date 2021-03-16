{
  type ToDo = {
    title: string;
    description: string;
  }

  // Use for utility type: Readonly
  function display (todo: Readonly<ToDo>) {
    // todo.title = 'random' -> cannot assign new property when type is readonly
  }
}