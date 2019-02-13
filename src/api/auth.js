/* eslint-disable no-console */
const axios = require('axios');
const tenantId = 'bdd59c2f-a9f8-4cd2-98b4-c72913291eb8'; // TODO: is this the VI tenant ID or my personal ID?
const aadEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2`;
const clientId = '9140befc-971e-4259-b9d7-e1c318ede090';

function loginRequest() {
  requestAuthorizationCode()
    .then(function(authorizationCode) {
      requestAccessToken(authorizationCode);
    })
    .catch(err => {
      console.log(err);
    });
}

function requestAuthorizationCode() {
  let promise = new Promise((resolve, reject) => {
    let parameters = {
      client_id: clientId,
      response_type: 'code',
      // redirect_uri: 'http%3A%2F%2Flocalhost%3A12345',
      response_mode: 'query',
      resource: 'https%3A%2F%2Fservice.contoso.com%2F&state=12345'
    };
    // console.log(parameters);
    axios
      .post(`${aadEndpoint}/authorize`, parameters)
      .then(function(response) {
        console.log(response);
        resolve(response.code);
      })
      .catch(err => {
        reject(err);
      });
  });
  return promise;
}

function requestAccessToken(authorizationCode) {
  let parameters = {
    grant_type: 'authorization_code',
    client_id: clientId,
    code: authorizationCode,
    redirect_uri: 'https%3A%2F%2Flocalhost%3A12345',
    resource: 'https%3A%2F%2Fservice.contoso.com%2F',
    client_secret: 'p@ssw0rd'
  };
  console.log(parameters);
  axios.post(`${aadEndpoint}/token`, parameters).then(function(response) {
    console.log(response);
    return response.code;
  });
}

function logoutRequest(params) {
  axios.get(aadEndpoint, params).then(function(response) {
    // console.log(response);
    return response.data;
  });
}

export { loginRequest as login, logoutRequest as logout };
