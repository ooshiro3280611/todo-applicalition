import React, { useState } from 'react'
import styled from 'styled-components'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value) {
            alert('入力してください')
            return
        }
        addTodo(value)
        setValue('')
    }

    return (
        <FormWrap onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={(e) => { setValue(e.target.value) }}
                value={value}
            />
            <button type='submit'>追加</button>
        </FormWrap>
    )
}

const FormWrap = styled.form`
    input {
        width: 500px;
    }
`

export default Form