import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import Input from '@iso/components/uielements/input';
import todoAction from '@iso/redux/todos/actions';
import TodoList from './TodoList';
import { TodoWrapper } from './Todo.styles';

const {
  addTodo,
  edittodo,
  deleteTodo,
  allCompleted,
  deleteCompleted,
} = todoAction;
const { Header, Content } = Layout;

export default function ToDo() {
  const [newTodo, setNewTodo] = React.useState('');
  const { todos, colors } = useSelector(state => state.Todos);
  const dispatch = useDispatch();

  return (
    <Layout style={{ background: 'none' }}>
      <TodoWrapper className="isomorphicTodoComponent">
        <Header className="isoTodoHeader">
          <Input
            placeholder={'Type here for add a new todo'}
            value={newTodo}
            className="isoTodoInput"
            onChange={event => setNewTodo(event.target.value)}
            onPressEnter={event => {
              setNewTodo('');
              dispatch(addTodo(event.target.value));
            }}
          />
        </Header>
        <Content className="isoTodoContentBody">
          <TodoList
            todos={todos}
            deleteTodo={id => dispatch(deleteTodo(id))}
            edittodo={todo => dispatch(edittodo(todo))}
            colors={colors}
            allCompleted={() => dispatch(allCompleted())}
            deleteCompleted={() => dispatch(deleteCompleted())}
          />
        </Content>
      </TodoWrapper>
    </Layout>
  );
}
