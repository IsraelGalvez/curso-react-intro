const styles = {
  listStyle: 'none',
  width: '75%',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

function TodoList({ children }){
    return(
      <ul style={styles}>
        {children}
      </ul>
    )
}

export default TodoList