import { TodoItem } from ".";

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

interface Props {
    items: Todo[];
}

const TodoList = ({ items }: Props) => {
    return (
        <ul>
            {items.map(item => <TodoItem key={item.id} item={item}/>)}
        </ul>
    );
}

export default TodoList;