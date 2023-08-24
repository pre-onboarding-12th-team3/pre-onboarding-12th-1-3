import { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Checkbox, Label } from '@/components/common';

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

interface Props {
    item: Todo;
    onUpdate: (id: number, todo: string, isCompleted: boolean) => void;
    onDelete: (id: number) => void;
}

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    width: 512px;
    margin-top: 8px;
`

const Form = styled.form`
    display: flex;
    gap: 24px;
    width: 512px;
`;

const ButtonBox = styled.div`
    display: flex;
`

const TodoItem = ({ item, onUpdate, onDelete }: Props) => {
    const {id, todo, isCompleted} = item;
    const [isChecked, setIsChecked] = useState(isCompleted);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(todo);

    const handleChange = () => {
        setIsChecked(prev => !prev);
        onUpdate(id, newTodo, !isChecked);
    }

    const handleEdit = () => {
        setNewTodo(todo);
        setIsEditing(prev => !prev);
    }

    const handleUpdate = () => {
        onUpdate(id, newTodo, isChecked);
        setIsEditing(false);
    }

    const handleDelete = () => {
        onDelete(id);
    }
    
    return (
        <Item>
            <Label>
                <Checkbox
                    checked={isChecked}
                    onChange={handleChange}
                />
                {!isEditing && (<span>{todo}</span>)}
            </Label>
            {isEditing ? (
                <Form>
                    <Input data-testid='modify-input' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                    <ButtonBox>
                        <Button data-testid='submit-button' type='submit' size='small' onClick={handleUpdate}>
                            제출
                        </Button>
                        <Button data-testid='cancel-button' size='small' onClick={handleEdit}>
                            취소
                        </Button>
                    </ButtonBox>
                </Form>
            ) : (
                <ButtonBox>
                    <Button data-testid='modify-button' size='small' onClick={handleEdit}>
                        수정
                    </Button>
                    <Button data-testid='delete-button'size='small' onClick={handleDelete}>
                        삭제
                    </Button>
                </ButtonBox>
            )}
        </Item>
    );
}

export default TodoItem;