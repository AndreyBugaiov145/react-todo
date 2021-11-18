import TodoList from "./Todo/TodoList";
import React,{useEffect} from 'react';
import Context from "./context";
//import AddTodo from "./Todo/AddTodo";
import Loader from "./loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(()=>import('./Todo/AddTodo'))

function App() {

    let todosArray = [
        /*{id: 1, comleted: false, title: 'купить хлеб'},
        {id: 2, comleted: true, title: 'купить молоко'},
        {id: 3, comleted: false, title: 'купить воду'},*/
    ]
    const [todos, setTodso] = React.useState(todosArray)
    const [loading, setLoading] = React.useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(()=>{
                    setTodso(todos)
                    setLoading(false)
                },2000)

            })
    },[])

    function toogleTodo(id) {
        setTodso(todos.map(todo => {
            if (todo.id === id) {
                todo.comleted = !todo.comleted
            }
            return todo
        }))


        console.log('todo id ', id)
    }

    function deleteTodo(id) {
        setTodso(todos.filter((todo) => todo.id !== id))
    }

    function addTodo(title) {
        setTodso(todos.concat([
            {title: title, id: Date.now(), comleted: false}
        ]))
    }

    return (
        <Context.Provider value={{deleteTodo: deleteTodo}}>
            <div className='wrapper'>
                <h1>react tutorial</h1>
                <Modal></Modal>
                <React.Suspense fallback={<p>loading ...</p>} >
                    <AddTodo onCreate={addTodo}></AddTodo>
                </React.Suspense>

                {loading && <Loader></Loader>}
                {todos.length ? <TodoList todos={todos} onToggle={toogleTodo}/> : loading ? null :(<p>no todos</p>)}

            </div>
        </Context.Provider>
    );
}

export default App;
