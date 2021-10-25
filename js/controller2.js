(async () => {
  const rawResponse = await fetch('https://login.salesforce.com/services/oauth2/authorize?client_id=3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn&redirect_uri=https://login.salesforce.com/services/oauth2/callback&response_type=code', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const content = await rawResponse.json();

  console.log(content);
})();