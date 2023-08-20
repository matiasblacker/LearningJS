
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`))
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/icong.png',
        body: 'codigo js' 
    })
}

