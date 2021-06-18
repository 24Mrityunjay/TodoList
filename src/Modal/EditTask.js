import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, SetTaskName] = useState("");
    const [desciption, SetDescription] = useState("");
    useEffect(() => {
        SetTaskName(taskObj.Name);
        SetDescription(taskObj.Desciption);
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'taskName') {
            SetTaskName(value);
        } else {
            SetDescription(value);
        }
    }
    const handleTask = (e) => {
        const obj = taskObj;
        obj["Name"] = taskName;
        obj["Desciption"] = desciption;
        updateTask(obj);
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Task Name</label>
                            <input className="form-control" type="text" value={taskName} name="taskName" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea rowa="5" className="form-control" value={desciption} name="description" onChange={handleChange} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleTask}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditTask;