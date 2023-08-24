import styled from 'styled-components';
import { Button, Checkbox, Label } from '@/components/common';
import { useState } from 'react';

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

interface Props {
    item: Todo;
}

const Item = styled.li`
    display: flex;
    gap: 12px;
`

const ButtonBox = styled.div`
    display: flex;
`

const TodoItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.isCompleted);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    
    return (
        <Item>
            <Label>
                <Checkbox
                    checked={isChecked}
                    onChange={() => setIsChecked(prev => !prev)}
                />
                <span>{item.todo}</span>
            </Label>
            {isEditing ? (
                <ButtonBox>
                    <Button data-testid='submit-button'>
                        제출
                    </Button>
                    <Button data-testid='cancel-button' onClick={() => {setIsEditing(false)}}>
                        취소
                    </Button>
                </ButtonBox>
            ) : (
                <ButtonBox>
                    <Button data-testid='modify-button' onClick={() => {setIsEditing(true)}}>
                        수정
                    </Button>
                    <Button data-testid='delete-button'>
                        삭제
                    </Button>
                </ButtonBox>
            )}
        </Item>
    );
}

export default TodoItem;