import ServerlessCall from '../../../config'
import * as jQuery from 'jquery';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
    /*await fetch(ServerlessCall.backendBaseUrl, {
        method: "POST",
        body: JSON.stringify(values),
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        },
        //credentials: "same-origin"
    }).then(function (response) {
        response.status     //=> number 100–599
        response.statusText //=> String
        response.headers    //=> Headers
        response.url        //=> String
        console.log(response);
        alert('success');
    }, function (error) {
        error.message //=> String
        console.log('error',error.message);
    })*/

    /*jQuery.ajax({

        type: 'POST',
        url: ServerlessCall.backendBaseUrl,
        contentType: 'application/json',
        data:JSON.stringify(values),
        dataType:'jsonp',
        async: true,
        crossDomain: true,
        xhrFields: {
          withCredentials: false
        },
      
        headers: {
          // Set any custom headers here.
          // If you set any non-simple headers, your server must include these
          // headers in the 'Access-Control-Allow-Headers' response header.
          'Access-Control-Allow-Origin':'*'
        },
      
        success: function(response) {
          console.log(response);
          alert('dasdasdasd');
        },
      
        error: function(data) {
            console.log('error',data);
          
        }
    });*/


     
    /*await axios.post(ServerlessCall.backendBaseUrl, {
        values
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });  */

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hfaduudc65.execute-api.eu-west-2.amazonaws.com/dev/carer",
        "method": "POST",
        "headers": {
          //"cache-control": "no-cache",
          //"postman-token": "08d27008-e50f-c5c0-1108-108594ccdedf"
          //"Access-Control-Allow-Origin":"http://localhost:3000"
        },
        "data": "{\r\n  \"name\": {\r\n    \"FirstName\": \"dasdasdasd\",\r\n    \"Surname\": \"dasdasdad\"\r\n  },\r\n  \"Email\": \"dasdasdasd@dasdasd.com\",\r\n  \"Phone\": \"+447222555555\",\r\n  \"Gender\": \"female\",\r\n  \"BirthDate\": \"2018-03-17\",\r\n  \"Nationality\": \"tertertertert\",\r\n  \"PostCode\": \"AA9 9AA\",\r\n  \"AreasOfInterest\": [\r\n    \"Spirtuality\",\r\n    \"Sport\"\r\n  ],\r\n  \"Tasks\": \"dasdasdasdsadas\"\r\n}"
      }
      
      jQuery.ajax(settings).done(function (response) {
        console.log(response);
      });  
});
