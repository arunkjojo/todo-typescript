import {
    FC,
    FormEvent,
    useRef,
    useContext
} from 'react'
import { TodosContext } from '../store/todos-context';
import cssClasses from './NewTodo.module.css'

// const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
const NewTodo: FC = () => {
    
    const todosCtx = useContext(TodosContext);
    
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        todosCtx.addTodo(enteredText);
    };
    
    return (
        <form onSubmit={submitHandler} className={cssClasses.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo