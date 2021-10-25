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
    //location.href ="http://www.pagina1.com";
    var url = window.location.href.startsWith('?code=');
    console.log(url);
    var urlvalue = window.location.href;
    console.log(urlvalue);
    const urlSearchParams = new URLSearchParams(window.location.href);
    const params = Object.fromEntries(urlSearchParams.entries());
    const valuecode = params.get('code');
    console.log(params);
    /*console.log("index.html 7 | Get Covid Data");
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
    });*/
}
function identify() {
    var client_id = '3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn';
    var redirect_uri = 'https://dinostagno.github.io/Kepler-1b/';
    var response_type = 'code';
    var urlIdentify='https://login.salesforce.com/services/oauth2/authorize?client_id='+client_id+'&redirect_uri='+redirect_uri+'&response_type='+response_type;
    console.log(urlIdentify);
    location.href = urlIdentify;
    var url = window.location.search.startsWith('?code=');
    console.log(url);
}
