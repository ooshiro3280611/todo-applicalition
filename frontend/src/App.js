import React, { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import axios from 'axios'



// const serverUrl = '/todos'
// const serverUrl = `http://localhost:3002/todos`

const App = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios
            .get('/todos')
            .then(res => {
                setTodos(res.data)
            })
    }, [])

    const addTodo = (content) => {
        const newTodo = {
            content: content
        }

        axios
            .post(`/todos`, newTodo)
            .then((res) => {
                setTodos(todos.concat(res.data))
            })
    }

    const deleteTodo = (id) => {
        axios
            .delete(`/todos/${id}`)
            .then(res => {
                if (res.status !== 200) {
                    alert('削除に失敗しました......')
                }
                const deleteTodos = todos.filter((todo, index) => todo._id !== id)
                setTodos(deleteTodos)
            })
    }

    return (
        <>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default App