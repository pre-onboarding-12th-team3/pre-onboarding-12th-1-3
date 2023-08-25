import { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Checkbox, Label } from '@/components/common';
import { Todo } from '@/apis/todo';

interface Props {
  item: Todo;
  modifyTodo: ({ id, todo, isCompleted }: Omit<Todo, 'userId'>) => void;
  removeTodo: (id: Todo['id']) => void;
}

const TodoItem = ({ item, modifyTodo, removeTodo }: Props) => {
  const { id, todo, isCompleted } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [newTodo, setNewTodo] = useState(todo);

  const handleCheckboxChange = () => {
    // TODO debounce
    setIsChecked((prev) => !prev);
    modifyTodo({ id, todo: newTodo, isCompleted: !isChecked });
  };

  const handleEdit = () => {
    setNewTodo(todo);
    setIsEditing((prev) => !prev);
  };

  const handleUpdate = () => {
    if (newTodo === '') return;

    modifyTodo({ id, todo: newTodo, isCompleted: isChecked });
    setIsEditing(false);
  };

  const handleDelete = () => {
    removeTodo(id);
  };

  return (
    <Item>
      <Label>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        {!isEditing && <span>{todo}</span>}
      </Label>
      {isEditing ? (
        <Form>
          <Input
            data-testid="modify-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <ButtonBox>
            <Button
              data-testid="submit-button"
              type="submit"
              size="small"
              disabled={newTodo === ''}
              onClick={handleUpdate}
            >
              제출
            </Button>
            <Button data-testid="cancel-button" size="small" color="secondary" onClick={handleEdit}>
              취소
            </Button>
          </ButtonBox>
        </Form>
      ) : (
        <ButtonBox>
          <Button data-testid="modify-button" size="small" onClick={handleEdit}>
            수정
          </Button>
          <Button data-testid="delete-button" size="small" onClick={handleDelete}>
            삭제
          </Button>
        </ButtonBox>
      )}
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 512px;
  margin-top: 8px;
`;

const Form = styled.form`
  display: flex;
  gap: 24px;
  width: 512px;

  & > Input {
    flex-grow: 1;
  }
`;

const ButtonBox = styled.div`
  display: flex;
`;
