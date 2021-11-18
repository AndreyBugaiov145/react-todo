import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    let [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value: value,
            onChange: (event) => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {
    //let [value, setValue] = useState('')
    let input = useInputValue('')

    function submitHandler(e) {
        e.preventDefault()
        // if (value.trim()) {
        //     onCreate(value)
        //     setValue('')
        // }

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form action="" style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            {/*<input type="text" value={value} onChange={event => setValue(event.target.value)}/>*/}
            <input type="text" {...input.bind}/>
            <button type='submit'>add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo