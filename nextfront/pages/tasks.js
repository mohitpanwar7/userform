import React, { useContext } from 'react';
import UserTasks from '../components/tasks.component';
import Header from '../components/header.component'
import AuthApi from '../components/AuthApi'

const Tasks = () => {
    var Auth = useContext(AuthApi);
    return (
        <>
            <Header auth={true} />
            <UserTasks />
        </>
    );
}

export default Tasks;