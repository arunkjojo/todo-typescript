import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
// import Todo from './models/todo';
import TodosContextProvider from './store/todos-context';

export default function App() {
  // const [todos, setTodos] = React.useState<Todo[]>([]);
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos(prevTodos => {
  //     return prevTodos.concat(newTodo);
  //   })
  // }
  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   });
  // }
  return (
    // <div>
    //   <h2 className='App'>Todo App in TS</h2>
    //   <NewTodo onAddTodo={addTodoHandler} />
    //   <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    // </div>

    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}