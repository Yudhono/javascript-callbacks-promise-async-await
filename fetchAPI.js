// POST USER DATA TO SERVER
fetch('https://reqres.in/api/users/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user 1'
    })
}).then(af => {
        // if (af.ok){
        //     console.log('SUCCESS');
        // } else {
        //     console.log('not successfull')
        // }
        return af.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('error'));

// GET DATA FROM SERVER
fetch('https://reqres.in/api/users/')
    .then(respon => {
        // if (respon.ok){
        //     console.log('SUCCESS');
        // } else {
        //     console.log('not successfull')
        // }
        return respon.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));