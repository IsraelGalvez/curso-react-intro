import './App.css';
import React from 'react'
import Title from './Title';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';

const defaultTodos = [
  { text: 'Contar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React,js', completed: false },
  { text: 'LLorar con la llorona', completed: false },
  { text: 'Lalalalal', completed: false },
]

const styles = {
  width: '500px',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  border: '.5px solid',
  borderColor: 'white',
  borderRadius: '7px',
  backdropFilter: 'blur(9px)',
}

function App() {
  return (
    <div className='app' style={styles}>

      <Title />
      <TodoCounter completed={5} total={16} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList> 

      <CreateTodoButton />

    </div>
  );
}

export default App;
