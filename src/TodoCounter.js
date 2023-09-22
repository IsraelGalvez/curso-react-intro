const styles = {
  color: 'White',
  fontSize: '2.3rem',
  fontWeight: '300'
}

function TodoCounter({ completed, total }){
  return(
    <h2 style={styles}>
      Has completado <b>{completed}</b> de <b>{total}</b> TODOS
    </h2>
  )
}

export default TodoCounter