import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

const styles = {
    ul:{
        listStyle:'none',
        margin : '0px'
    }
}

function TodoList(props) {

    return(
        <ul style={styles.ul}>
            {props.todos.map((todo,index)=>{
                return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
            })}
        </ul>
    )
}

TodoList.propTypes ={
    //todos : PropTypes.string.isRequired
    todos : PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle : PropTypes.func.isRequired
}

export default TodoList