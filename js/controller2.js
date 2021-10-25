(async () => {
  const rawResponse = await fetch('https://login.salesforce.com/services/oauth2/authorize?client_id=3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn&redirect_uri=https://login.salesforce.com/services/oauth2/callback&response_type=code', {
    method: 'GET'
  });
  const content = await rawResponse.json();

  console.log(content);
})();

const getCovidData = async () => {
  console.log("index.html 10 | Processing...");
  const request = await fetch('https://dinostagno-dev-ed.my.salesforce.com//services/apexrest/Accounts/0012E00002e4HURQA2', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 00D2E000000mpVn!ARIAQBTuNlYHrz4FKDE9oFebuSn.iK4AQfkHPKLvBGOHnzgH_7Br9ylq46ceocEk4SZCFwGtVlitoDg.UUlePO_jH01zHcc7'
    },
    
});
  const data = await request.json();
  return data;
};
getCovidData().then(covidData => {
  console.log("data", covidData);
  //document.getElementById("total-cases").innerText = covidData.confirmed.value;
});