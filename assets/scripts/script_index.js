const username = window.location.search.split('=')[1];

document.querySelector('.title').innerHTML = `Hola ${username}!`;