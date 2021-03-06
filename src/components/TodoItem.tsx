import cssClasses from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = props => {
    
    return <li
        className={cssClasses.item}
        onClick={props.onRemoveTodo}
    >{props.text}</li>
}

export default TodoItem