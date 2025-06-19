import React, { use, useState } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";

const App = () => {
	const [toDo, setToDo] = useState(["New todo"]);
	const [counter, setCounter] = useState(0);
	const [customToDo, setCustomToDo] = useState("");
    const [useMemoToDo, setUseMemoToDo] = useState([]);

    const addNewToDo =() => {
        setToDo(prev => [...prev, "New todo"]);
    }

    const incrementCounter = () => {
        setCounter(prev => prev+1);
    }

    const handleCustomToDo = (value) => {
        setCustomToDo(value)
    }

    const validateCustomToDo = customToDo.length > 5;
    const addCustomToDo = () => {
        if(validateCustomToDo){
            setUseMemoToDo(prev => [...prev, customToDo]);
            setCustomToDo("");
        }
        else{
            alert("Custom To Do must be more than 5 characters.")
        }
    }

	return (
        <div>
            <h1>Task Management App</h1>
            <div>
                <h2>React Memo ToDo</h2>
                <ul>
                    {toDo.map((task, index) => (
                        <ReactMemo key={index} todo={task}/>
                    ))}
                </ul>
                <button onClick={addNewToDo}>Add ToDo</button>
            </div>

            <div>
                <h2>Counter: {counter}</h2>
                <button onClick={incrementCounter}>+</button>
            </div>

            <div>
                <h2>React useMemo</h2>
                <input
                    type="text"
                    value={customToDo}
                    onChange={(e) => handleCustomToDo(e.target.value)}
                    placeholder="Enter Skill"
                />
                
                <button onClick={addCustomToDo}>Add Skill</button>
                
                <UseMemo task={useMemoToDo}/>

            </div>
        </div>
    );
};

export default App;
