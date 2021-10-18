function getValues() {
    var value = document.getElementById("last_name").value;
    console.log(value);
    
    fetch('https://dinostagno-dev-ed.my.salesforce.com//services/apexrest/Accounts/0012E00002e4HURQA2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 00D2E000000mpVn!ARIAQCxhTq9cjxrjJOPICFKi6iobwHJrJ3sUc6H6iIXdYPUNBR0yM.AqHQK_TvSzuLb5JH31nuPvbawCCsttPpW5MeaV4A2r'
        },
        
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });


}
function ShowHelloMessage() {
    var name = document.getElementById("myname");
    console.log(name);
    alert(name)
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
}


