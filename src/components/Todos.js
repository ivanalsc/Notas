import React, { useState } from 'react'

const Todos = () => {

    const [valueTodo, setValueTodo] = useState('');

    const [todos, setTodos] = useState([]);


    const handleChange = (e) => {
            setValueTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valueTodo.length > 2){
            setTodos([...todos, valueTodo]);
            setValueTodo('');
    

        }
       
    }
 
    return (
        <section>
            <form onSubmit={handleSubmit} className="add-form">
                <input 
                    type="text"
                    value={valueTodo}
                    onChange={handleChange}
                    />
                    <button className="add-btn">Agregar</button>
            </form>
            <ul className="todos">
                {
                    todos.map( todo => {
                        return(
                            <Item todo = {todo} />
                         
                        )
                    })
                }
            </ul>
            
        </section>
    )
}

const Item = ({todo}) => {
    const [doing, setDoing] = useState(false);
    const [done, setDone] = useState(false);
    const [buttons, setButtons] = useState(false);


    const handleDoing = (e) => {
        e.preventDefault();
        setDoing(!doing);
        
    }
    const handleDone = (e) => {
        e.preventDefault();
        setDone(!done);
        setDoing(false);
        setButtons(!buttons);
        
    }

    return(
        <li key={todo} className={done && "item-done"}>
            <span className={doing ? "item-doing" : "item"}>{todo}</span>
            
            { !buttons && 
            <div>
                <button  className='item-btn' onClick={handleDoing}> {!doing ? 'Haciendo' : 'Pausar'}</button>
                <button  className='item-btn' onClick={handleDone}>¡Listo!</button>

            </div>
            
            }

        </li>

    )

}

export default Todos
