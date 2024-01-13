// import React, { useState } from 'react'

// const Todo = () => {
// // title---------------------------------------- state
// const [titleData,setTitleData] = useState('')
// const [titleItems,settitleItems] = useState([])

// // description----------------------------------- state
// const [descData,setdescData] = useState('')
// const [descItems,setdescItems] = useState([])

// const addItem = () => {
//     if (!titleData && !descData) {
//       // Handle the case where both titleData and descData are empty
//     } else {
//       settitleItems([...titleItems, titleData]);
//       setTitleData('');
  
//       setdescItems([...descItems, descData]);
//       setdescData('');
//     }
//   };

//   const delItems = (key) => {
//     let newList = [...titleItems, ...descItems];
//     newList.splice(key, 1);
//     settitleItems(newList.slice(titleItems.length));
//     setdescItems(newList.slice(descItems.length));
//   };
  
//   return (
//     <>
//                 <div className='container-fluid main-div '>
//                 <div className='child-div'>
            
//                 <div className="add-items container d-flex">

//                 <input type="text" placeholder='enter title'
                
//                 value={titleData}
//                 onChange={(e)=>setTitleData(e.target.value)}
                
//                 /> 
//                 <input type="text" placeholder='enter description'
//                 value={descData}
//                 onChange={(e)=>setdescData(e.target.value)}
                
                
//                 />

//                 <button onClick={addItem}>create</button>

//                 </div>
// {/* --------------------------title---------------------------------------------------- */}

//                                  <div className='show-items'>
//                                     {
//                                 titleItems.map((currentData, index) => (
//                                     <div className='each-items d-flex' key={index}>
//                                     <h5>Title: {currentData}</h5>
//                                     <button style={{ marginLeft: '80px' }}>Read</button>
//                                     <button>Update</button>
//                                     <button onClick={delItems}>Delete</button>
//                                     </div>
//                                 ))
//                                 }
//                                </div>

// {/* --------------------------description---------------------------------------------------- */}
//                                 <div className='show-items'>
//                                 {
//                                     descItems.map((currentData, index) => (
//                                         <div className='each-items d-flex' key={index}>
//                                         <h5>Description:  {currentData}</h5>
//                                         <button style={{ marginLeft: '80px' }}>Read</button>
//                                         <button>Update</button>
//                                         <button onClick={delItems}>Delete</button>
//                                         </div>
//                                     ))
//                                     }
//                                 </div>
                
//                                 </div>
                                    
//                                 </div>
//         </>
//     )
// }

// export default Todo


// import React, { useState } from 'react';

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const addTodo = () => {
//     if (title && description) {
//       setTodos([...todos, { title, description }]);
//       setTitle('');
//       setDescription('');
//     }else{
//       alert("Please add something new")
//     }
//   };

//   const deleteTodo = (index) => {
//     const deletedTodos = [...todos];
//     deletedTodos.splice(index, 1);
//     setTodos(deletedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo Web Application</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <div>
//         <h2>Todos:</h2>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               <strong>Title: {todo.title}</strong>  <br />
//               <strong>Description: {todo.description}</strong> 
//               <button onClick={() => deleteTodo(index)}>Delete</button>
//               <button>Update</button>
//               <button>Read</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;




// import React, { useState } from 'react'

// const TodoApp = () => {
// const [Todos,setTodos] = useState([])
// const [title,setTitle] =useState('')
// const [description,setDescription] =useState('')


//   const createToDo=()=>{
// if(title && description){
//   setTodos([...Todos,{title, description}])
//   setTitle('')
//   setDescription('')
// }else{
//   alert("Please enter something in ToDo's input")
// }
//   }

//   const deleteToDo =(index)=>{
//    const deletedToDo = [...Todos]
//    deletedToDo.splice(index, 1);
//    setTodos(deletedToDo)
//   }
//   return (
//     <div>
//       <h1>ToDo Web Application</h1>
//       <div>

//         <input type="text" 
//         placeholder='Enter title' 
//         value={title}
//         onChange={(e)=>setTitle(e.target.value)}
//          />


//         <input type="text" 
//         placeholder='Enter description' 
//         value={description}
//         onChange={(e)=>setDescription(e.target.value)}
//         />

//         <button onClick={createToDo}>Create</button>
//       </div>
//       <div>
//       <h2>Todos:</h2>
//       <ul>
//       {Todos.map((currentdata,index)=>(  

//         <li key={index}>
//           <strong>Title:</strong>{currentdata.title}<br />
//           <strong>Description:</strong>{currentdata.description}
//           <button>Read</button>
//           <button>Update</button>
//           <button onClick={()=>deleteToDo(index)}>Delete</button>

//         </li>
//       ))}

//       </ul>
//       </div>
//     </div>
//   )
// }

// export default TodoApp




import React, { useState } from 'react';

const TodoApp = () => {
  const [Todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const createToDo = () => {
    if (title && description) {
      if (editingIndex !== null) {
        // If editingIndex is not null, it means we are updating an existing todo
        const updatedTodos = [...Todos];
        updatedTodos[editingIndex] = { title, description };
        setTodos(updatedTodos);
        setEditingIndex(null);
      } 
      else {
        // If editingIndex is null, it means we are creating a new todo
        setTodos([...Todos, { title, description }]);
      }
      setTitle('');
      setDescription('');
    } 
    else {
      alert("Please enter something in ToDo's input");
    }
  };

  const deleteToDo = (index) => {
    const deletedToDo = [...Todos];
    deletedToDo.splice(index, 1);
    setTodos(deletedToDo);
    setEditingIndex(null);
  };

  const editToDo = (index) => {
    // Set the editingIndex and populate the input fields with the selected todo
    setEditingIndex(index);
    setTitle(Todos[index].title);
    setDescription(Todos[index].description);

  };

  return (
    <div className='main-div'>
      <h1 style={{color:"whitesmoke",marginLeft:"500px",marginTop:"30px"}}>ToDo Web Application</h1>
      <div className='child-div'>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={createToDo}>{editingIndex !== null ? 'Update' : 'Create'}</button>
      </div>
      <div className='add-items'>
        {/* <h2>Todos:</h2> */}
        <ul>
          {Todos.map((currentdata, index) => (
            <li key={index}>
              <strong>Title:  </strong>{currentdata.title}<br />
              <strong>Description:  </strong>{currentdata.description}
              <button onClick={() => editToDo(index)}>Edit</button>
              <button onClick={() => deleteToDo(index)}>Delete</button>
              <br /><br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;









