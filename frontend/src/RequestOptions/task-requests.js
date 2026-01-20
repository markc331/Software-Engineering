export async function updateTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"type":'update_task', "params": taskItem})
    };
    try {
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        console.log("response");
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }

    
}

export async function deleteTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"type":'delete_task', "params": {"task_id": taskItem.task_id}})
    };
    try {
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        console.log("response");
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }
}


export async function getTask (account_id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"type":'get_tasks_from_user_id', "params": {"account_id": account_id}})
    };
    try {
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }

}

export async function createTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"type":'create_task', "params": taskItem})
    };
    try {
        console.log(requestOptions);
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        console.log(response);
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }

}

/*  NEW request format that will be used eventually 
*/

/*function updateTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_task', taskItem})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/

/*function deleteTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'delete_task', taskItem})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/

/*function getTask (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'get_task_from_user_id', user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/

