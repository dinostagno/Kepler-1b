// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
// Opciones por defecto estan marcadas con un *
const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
.then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
});