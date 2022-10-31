'use srtict';
const axios = require('axios');

function tenor_api(){
    let API_KEY = 'AIzaSyCnFQJ1nxJintf_eYdERuEnr1kIEOPtlxQ';
    let API_URL = 'https://tenor.googleapis.com/v2/search?q=excited&key='+ API_KEY + '&client_key=my_test_app&limit=8';

    axios.get(API_URL)
    .then(function (response) {
        console.log(response.data);
       })

    .catch(error => {
        console.log('Execution error');
        console.log(error);
        process.exit(0);
    })
}

tenor_api();