const username = window.location.search.split('=')[1];

if (username !== undefined) {
    document.querySelector('.title').innerHTML = `Hola ${username}, bienvenido!`;
} else {
    document.querySelector('.title').innerHTML = 'Hola bienvenido!';
}
