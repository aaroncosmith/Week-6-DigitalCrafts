'use strict';

// function get(url) {
//   return fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       return data;
//     })
//     .catch(function(error) {
//       return error;
//     });
// }

// add async before arguement

const getWithAwait = async (url) => {
    const response = await fetch(url);
    console.log("response is ", response);
    const data = await response.json();
    console.log("data is ", data);
    return data; 
};

