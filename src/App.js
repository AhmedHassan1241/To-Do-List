import { useState } from "react";
import "./App.css";
let nextId = 2;

function App() {
  const initialValue = [
    { id: 0, icon: "👉👉", todo: "CSS" ,done:false},
    { id: 1, icon: "👉👉", todo: "HTML" ,done:false},
    { id: 2, icon: "👉👉", todo: "JavaScript" ,done:false},
  ];
  const [state, setState] = useState("");
  const [todo, setTodo] = useState(initialValue);

  function handelAdd() {
    nextId++;
    setTodo([
      ...todo,
      {
        id: nextId,
        icon: "👉👉",
        todo: state,
        done:false
      },
    ]);
  }
  const handelDone=(index)=>{
    const newTodos = [...todo]
    newTodos[index].done= !newTodos[index].done
    setTodo(newTodos)
  }
  function handelDelet(todoId) {
    setTodo(todo.filter((td) => td.id !== todoId));
  }
  const listTodo = todo.map((s) => {
    return (
      <>
      <div className="lil">
<div style={{display:"flex"}}>
      {s.icon}<li
        key={s.id}
        style={{
          margin: "5px 0",paddingLeft:"10px",
          cursor:"pointer",
          textDecoration: (s.done)?"line-through":"none"
        }}
        // className={s.done?"done":""} 
      onClick={()=>handelDone(s.id)}>
         {s.todo}{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </li>
      </div>
        <button onClick={() => handelDelet(s.id)}>❌</button>
      </div>
      </>
    );
  });
  return (
    <div style={{ textAlign: "center",height:"100%"}}>
      <div style={{margin:"50px auto",padding:"15px", maxWidth:"50%",boxShadow:"#9c9cd4  1px 1px 20px 8px",borderRadius:"25px"}}>
        <h2>TO Do List </h2>
        <div>
          <input value={state} style={{width:"75%"}} placeholder="Enter Item" onChange={(e) => setState(e.target.value)} />
          <button onClick={handelAdd}>Add To Do</button>
        </div>
        <ul style={{Width:"50%",margin:"auto",padding:"20px 50px"} }>{listTodo}</ul>
      </div>
    </div>
  );
}

export default App;
