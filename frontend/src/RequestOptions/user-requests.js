export async function updateUsername (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_account', account_id: user.account_id, username: user.username})
    };
    try {
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }
    
}

export async function updatePassword (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_account', account_id: user.account_id, password: user.password})
    };
    try {
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }
    
}

export async function deleteUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'delete_account', account_id: user.account_id})
    };
    try {
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }
}

export async function getUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"type":'get_user_id', "params":user})
    };
    try {
        const response = await fetch('http://localhost:8000/endpoint.php', requestOptions);
        return response.json();
    } catch (err) {
        console.log("error", err);
        return {};
    }

}

export async function createUser (user) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"type":'create_account',"params":user})
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

/* NEW request format that will be used eventually */ 

/*
function updateUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_account', user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/

/*function deleteUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'delete_account', user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
}*/

/*function getUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'get_user_id', username: user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);

}*/


