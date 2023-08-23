import { Button, Checkbox, Label } from '@/components/common';
import {useState} from 'react';

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

interface Props {
    item: Todo;
}

const Item = ({ item }: Props) => {
    const {todo, isCompleted} = item;
    const [isEditing, setIsEditing] = useState<boolean>(false);
    
    return (
        <li>
            <Label>
                <Checkbox
                    checked={isCompleted}
                />
                <span>{todo}</span>
            </Label>
            {isEditing ? (
                <div>
                    <Button data-testid='submit-button'>
                        제출
                    </Button>
                    <Button data-testid='cancel-button' onClick={() => {setIsEditing(false)}}>
                        취소
                    </Button>
                </div>
            ) : (
                <div>
                    <Button data-testid='modify-button' onClick={() => {setIsEditing(true)}}>
                        수정
                    </Button>
                    <Button data-testid='delete-button'>
                        삭제
                    </Button>
                </div>
            )}
        </li>
    );
}

export default Item;