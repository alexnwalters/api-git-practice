'use strict';

let x = '';

function getUserRepos() {
    fetch(`https://api.github.com/users/${x}/repos`)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
    .then(responseJson => 
        displayResults(responseJson))
    .catch(error => $('#js-error-message').text(`Something went wrong: ${error.message}`));
}

function displayResults(responseJson) {
    console.log(responseJson);

    $('#results').empty();
    
    for (let i = 0; i < responseJson.length; i++) {
        console.log(i);

        $('#results').append(
            `<p>${responseJson[i].name} <a href=${responseJson[i].html_url}>REPO</a></p>`
        );
    };
    
    $('section').removeClass('hidden');
}

function nameUser() {
    x = document.getElementById("username").value;
    return x;
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        nameUser();
        getUserRepos();
        console.log(x);
    }); 
}

$(watchForm);