import useAPI from "@/apis/todo/todo";
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

interface Props {
    items: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ items, setTodoList }: Props) => {
    const {updateTodo, deleteTodo} = useAPI();

    const handleUpdate = async(
        id: number,
        todo: string,
        isCompleted: boolean
    ) => {
        const prevTodo = items.find(todo => todo.id === id);
        if(!prevTodo || prevTodo.todo === todo && prevTodo.isCompleted === isCompleted) return;
        try {
            await updateTodo(id, todo, isCompleted);
            setTodoList(prev => 
                prev.map(item => 
                    item.id === id ? {
                        ...item,
                        todo,
                        isCompleted
                    } : item
                )
            )
        } catch(err) {
            alert('할 일을 수정하는 데 실패했습니다');
        }
    }

    const handleDelete = async(id: number) => {
        try {
            await deleteTodo(id);
            setTodoList(prev => prev.filter(item => item.id !== id));
        } catch(err) {
            alert('할 일을 삭제하는 데 실패했습니다');
        }
    }

    return (
        <ul>
            {items.map(item => <TodoItem key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>)}
        </ul>
    );
}

export default TodoList;