import { useEffect, useState } from "react"

// export default function Shopping(){
//     const [cart, setCart] = useState([])
//     let value;
//     if(cart.length === 0){
//         value = "No Item in cart"
//     }
//     else{
//         return(
//             value = cart.map((item, index) => {
//                 return(
//                     <p key={index}>{item}</p>
//                 )   
//             })
//         )
//     }
//     return(
//         <>
//         <h1>Shopping Cart: {value}</h1>
//         </>
//     )
// }

export default function Shopping(){
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    let [editData, setEditData]= useState(false)
    let [editText, setEditText] = useState("")

    const handleSubmit = (data) =>{
        let newToDo = todos.concat(data)
        setTodos(newToDo)
        setTodo('')
       
    }
    const handleDelete = (data) => {
    //      /* Find the item and remove from the todos list */
        todos.findIndex(todo =>todo === data)
        todos.splice(data,1)

    /* Add function to remove item from page */
      const newTodos = todos.filter((todo, i) => i !== todo);
        setTodos(newTodos);
    }
    /* Edit function from here */

    const handleEdit =(data)=>{
        setEditData(true)
        setTodo(data)
        setEditText(data)
    }

    const handleUpdate =(data)=>{
        
        let oldIndex = todos.findIndex(todo => todo === data)
        
        todos[oldIndex] = editText
        
        setTodos(todos)
        setEditData(false)
        setTodo("")
    }

    let display;
    if(editData === false){
        display =  <div>
        <h1>My Todo List</h1>
        <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} placeholder="Add new Todo"/>
        <button onClick={() => {handleSubmit(todo)}}>Add</button>
        
        {todos.map((todo, index) => {
            return(
                <p key= {index}>
                    {todo} <button onClick={()=>{handleDelete(todo)}}>Delete</button>
                    <button onClick={()=>{handleEdit(todo)}}>Edit</button>
                
                </p>
            )
        })}


    </div>
    }
    else{
        display = <><input value={editText} onChange={(e)=>{setEditText(e.target.value)}}/><button onClick={()=>{handleUpdate(todo)}}>Submit</button></>
    }
    
    return( 
        <div>
            {display}
        </div>
            
    )
}