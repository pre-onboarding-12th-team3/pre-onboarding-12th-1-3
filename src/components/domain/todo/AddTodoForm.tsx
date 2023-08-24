import styled from 'styled-components';
import { Input, Button } from '@/components/common';
import { useState } from 'react';
import useAPI from '@/apis/todo/todo';

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

interface Props {
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 24px;
    width: 512px;
`;

const AddTodoForm = ({ setTodoList }: Props) => {
    const [todo, setTodo] = useState<string>(''); 
    const {createTodo} = useAPI();

    const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setTodo('');
        try {
            const newTodo = await createTodo(todo);
            setTodoList((prev: Todo[]) => [...prev, newTodo]);
        } catch (err) {
            alert('새로운 투두를 만드는 데 실패했습니다');
        }
    }

    return (
        <Form>
            <Input data-testid='new-todo-input' value={todo} placeholder='할 일을 입력하세요' onChange={(e) => setTodo(e.target.value)}/>
            <Button data-testid='new-todo-add-button' type='submit' onClick={onSubmit} disabled={todo === ''}>추가</Button>
        </Form>
    );
}

export default AddTodoForm;