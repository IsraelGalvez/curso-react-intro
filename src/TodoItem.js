import "./TodoItem.css"

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid',
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    color: 'white',
    fontSize: '1.3rem',
  },
  
  marginSpan1: {
    marginLeft: '10px',
    width: '15px',
    height: '15px',
    backgroundColor: 'red',
  },

  marginSpan2: {
    width: '21px',
    height: '21px',
    marginRight: '10px',
    borderRadius: '20px',
    border: 'white solid 2px',
    textAlign: 'center',
    paddingBottom: '5px',
    fontSize: '1.2rem',
    paddingTop: '.9px',
    cursor: 'pointer',
  },
}

function TodoItem({ text, completed }){
    return(
      <li style={styles.container}>
        <input type='radio' checked={completed} style={styles.marginSpan1}/>
        <p className={`${completed ? 'subrayado':''}`}>{text}</p>
        <span className="buttonX" style={styles.marginSpan2}>X</span>
      </li>
    )
}

export default TodoItem