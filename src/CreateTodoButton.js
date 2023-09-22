import './CreateTodoButton.css'

const styles = {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    fontSize: '3rem',
    fontWeight: '700',
    color: '#13242d',
    backgroundColor: 'white',
    border: 'none',
    position: 'relative',
    left: '210px',
}

function CreateTodoButton(){
    return(
        <button className='button' style={styles}>+</button>
    )
}

export default CreateTodoButton