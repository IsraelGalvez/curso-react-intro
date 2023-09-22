const styles = {
  width: '75%',
  height: '30px',
  borderRadius: '5px',
  border: 'none',
  textAlign: 'center',
  outline: 'none',
  fontSize: '15px',
  color: '#61677A',
  fontWeight: '700',
}

function TodoSearch(){
    return(
      <input style={styles} placehoder="Cortar cebolla" />
    )
}

export default TodoSearch