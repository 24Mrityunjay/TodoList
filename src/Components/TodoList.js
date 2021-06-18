import React, { useEffect, useState } from 'react';
import CreateTask from '../Modal/CreateTask';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, SetTaskList] = useState([]);
    const toggle = () => setModal(!modal);

    useEffect(() => {
        let arr = localStorage.getItem("temList");
        arr = JSON.parse(arr);
        if (arr) {
            SetTaskList(arr)
        }
    }, [])

    const saveTask = (taskObj) => {
        const temList = taskList;
        temList.push(taskObj);
        localStorage.setItem("temList", JSON.stringify(temList));
        SetTaskList(temList);
        setModal(false);
    }

    const deleteTask = (index) => {
        // const tempList = taskList;
        taskList.splice(index, 1);
        localStorage.setItem("temList", JSON.stringify(taskList))
        SetTaskList(taskList);
        window.location.reload();
    }

    const updateListArray = (obj, index) => {
        const tempObj = taskList;
        tempObj[index] = obj;
        localStorage.setItem("temList", JSON.stringify(tempObj))
        SetTaskList(tempObj);
        window.location.reload();
    }
    return (
        <>
            <div className=" header text-center">
                <h1>Todo List</h1>
                <button className="btn btn-primary mt-2" onClick={() => { setModal(true) }}>Create List</button>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    )
}

export default TodoList;
