import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddTodo({todo, setTodo }) {

    const [value, setValue] = useState('')

    function saveTodo() {

        if (value === '') {
          return
        }

        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

  return (
    <div className='block_btn'>
        <textarea className='content' 
               placeholder='What needs to be done?' 
               content='text'
               value={value}
               onChange={(e) => setValue(e.target.value)} />
               <button className="btn" onClick={saveTodo}>save</button>
    </div>
  )
}

export default AddTodo