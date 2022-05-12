const space_lamp = document.querySelector('#space_lamp')
const button = document.querySelector('button')
let times = 0

button.addEventListener('click', function () {
    ++times
    space_lamp.classList.toggle('on')
    if (times > 20) {
        space_lamp.classList.remove('off')
        space_lamp.classList.remove('on')
        space_lamp.classList.add('broken')
        button.innerText = 'F#ck...'
    }
})

space_lamp.addEventListener('click', function () {
    if (space_lamp.classList.contains('on'))
    alert('Não toca na lampada!! Tá quente :c')
})

