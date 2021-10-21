function getValues() {
    var value = document.getElementById("last_name").value;
    console.log(value);
    
    fetch('https://dinostagno-dev-ed.my.salesforce.com//services/apexrest/Accounts/0012E00002e4HURQA2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 00D2E000000mpVn!ARIAQLQmSGmFUxaLfwPmy0WQByzSCJGuw8NA2bJTlHmLr_Oq4P3mhBf_JpD6sIjAGt_KA0hlXVG0guAQKVTwooiSDNtrVZMA'
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
            'Authorization': 'Bearer 00D2E000000mpVn!ARIAQE8DuZGJiQq7B5BvFBapnXUpa_Dw0C6EYgQxg3IhNNy1GH_Wl3ec0OAy5eEk7DdzqP28WlpWwKkR7BomSkHwCkmsqeCn'
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
