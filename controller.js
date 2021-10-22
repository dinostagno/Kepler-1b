function getValues() {
    var value = document.getElementById("last_name").value;
    console.log(value);
    
    fetch('https://dinostagno-dev-ed.my.salesforce.com/services/apexrest/Accounts/0012E00002e4HURQA2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 00D2E000000mpVn!ARIAQIBNvPOAxQMeDu6yC_ovxUjqYMkli_h34KOfuoJ69Nbxmctyh5orgmF4UhUK9yqHJjFsnrrvJFZWVFRjsJXjUpPfQQ7t'
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
function loadService() {
    console.log("index.html 7 | Get Covid Data");
    const getCovidData = async () => {
      console.log("index.html 10 | Processing...");
      const request = await fetch('https://dinostagno-dev-ed.my.salesforce.com//services/apexrest/Accounts/0012E00002e4HURQA2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 00D2E000000mpVn!ARIAQIBNvPOAxQMeDu6yC_ovxUjqYMkli_h34KOfuoJ69Nbxmctyh5orgmF4UhUK9yqHJjFsnrrvJFZWVFRjsJXjUpPfQQ7t'
        },
        
    });
      const data = await request.json();
      return data;
    };
    getCovidData().then(covidData => {
      console.log("data", covidData);
      //document.getElementById("total-cases").innerText = covidData.confirmed.value;
    });
}
