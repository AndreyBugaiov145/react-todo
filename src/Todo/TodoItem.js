import PropTypes from "prop-types";
import TodoList from "./TodoList";
import Context from "../context";
import React,{useContext} from 'react'

const styles = {
    li : {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding : '0.5rem 1rem',
        border : '1px solid silver',
        borderRadius : '4px',
        marginBottom : '0.5rem'
    },
    input : {
        marginRight : '1rem'
    }

}

function TodoItem ({todo,index,onChange}) {
    const classes =[]
    let {deleteTodo} = useContext(Context)
    if (todo.comleted){
        classes.push('done')
    }
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input  style={styles.input} checked={todo.comleted} type="checkbox" onChange={()=>onChange(todo.id)}/>
                <strong>{index +1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='rm' onClick={deleteTodo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes ={
    todo : PropTypes.object.isRequired,
    index : PropTypes.number,
    onChange : PropTypes.func.isRequired,
}

export default TodoItem