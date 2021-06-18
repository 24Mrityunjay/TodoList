import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {
    const [taskName, SetTaskName] = useState("");
    const [desciption, SetDescription] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'taskName') {
            SetTaskName(value);
        } else {
            SetDescription(value);
        }
    }
    const handleTask = (e) => {
        const tempObj = {};
        tempObj["Name"] = taskName;
        tempObj["Desciption"] = desciption;
        save(tempObj);
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
                    <Button color="primary" onClick={handleTask}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CreateTask;