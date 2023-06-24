import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../store/todosReducer'

// {
//     id: 1,
//     text: 'do hmw',
// }

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.items)
    const dispatch = useDispatch()

    const onButtonClick = () => {
        if (newTodo.trim() !== ''){
            dispatch(addTodo({
                id: new Date(),
                text: newTodo
            }))
            setNewTodo('')
        }
    }

    return (
        <div><h4>TodoList</h4>
            <input 
                type="text"
                onChange={e => setNewTodo(e.target.value)}
                value={newTodo} />
            <button onClick={onButtonClick}>Добавить</button><br />
            <ul>{todos.map( t => 
                <li>{t.text}</li>
            )}</ul>
        </div>
    )
}
export default TodoList