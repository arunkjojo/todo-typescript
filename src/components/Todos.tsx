import {FC, useContext} from 'react'
// import Todo from '../models/todo';
import TodoItem from './TodoItem';
import cssClasses from './Todos.module.css'
import { TodosContext } from '../store/todos-context';

// const Todos: FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = () => {
const Todos: FC = () => {
  
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={cssClasses.todos}>
      {todosCtx.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;