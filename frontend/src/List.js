import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <Item
                        content={todo.content}
                        id={todo._id}
                        key={todo._id}
                        deleteTodo={deleteTodo}
                        number={index}
                    />
                ))
            }
        </ul>
    )
}

export default List