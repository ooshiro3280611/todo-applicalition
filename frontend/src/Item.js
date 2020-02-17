import React, { useState } from 'react'

const Item = ({ content, id, deleteTodo, number }) => {
    const [isDone, setIsDone] = useState(false)

    const [isEditing, setIsEditing] = useState(false)
    let btnText = isDone ? '戻す' : '完了'
    const [edContent, setEdContent] = useState(content)

    const [isChange, setIsChange] = useState(false)

    const handleClick = () => {
        setIsDone(!isDone)
    }

    return (
        <li>
            <span>{number + 1}</span>
            {
                isEditing
                    ? <input
                        type='text'
                        onChange={(e) => { setEdContent(e.target.value) }}
                        value={edContent}
                    />
                    : <span>{edContent}</span>
            }
            <button onClick={handleClick}>{btnText}</button>
            <button onClick={() => {
                deleteTodo(id)
            }}>削除</button>
            {
                isChange
                    ? <button
                        onClick={() => {
                            setIsEditing(!isEditing)
                            setIsChange(!isChange)
                        }}
                    >変更</button>
                    : <button
                        onClick={() => {
                            setIsEditing(!isEditing)
                            setIsChange(!isChange)
                        }}
                    >編集</button>
            }
        </li>
    )
}

export default Item