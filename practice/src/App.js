import { useState } from 'react';
import AddTodo from './components/AddTodo.js';
import TaskList from './components/TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id:nextId,
        title: title,
        done: false
      }
    ]);
    nextId += 1;
  }

  function handleChangeTodo(nextTodo) {
    const newTodos = todos.map(todo => {
      if(todo.id === nextTodo.id){
        return nextTodo;
      }else{
        return todo;
      }
    });
    setTodos(newTodos);
  }

  function handleDeleteTodo(todoId) {
    const newTodos = todos.filter(t => t.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
