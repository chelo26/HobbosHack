import ServerlessCall from '../../config/config'

export default (async function showResults(values) {
    await fetch(ServerlessCall.backendBaseUrl + 'carer', {
        method: "POST",
        body: JSON.stringify(values, null, 2),
    }).then(function (response) {
        if (response.status == 200) {
            response.json().then(json => {
                console.log(json);
            });
        }
    }, function (error) {
        error.message //=> String
    })
});
