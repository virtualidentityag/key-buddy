/* eslint-disable no-console */
const axios = require('axios');
const apiEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'; // TODO: Add appropriate endpoint

function getRequest(params) {
  axios
    .get(apiEndpoint, {
		params: params
	})
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function postRequest(body) {
  axios
    .post(apiEndpoint, body)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export { getRequest as get, postRequest as post };
