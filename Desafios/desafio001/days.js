const doc = window.addEventListener('load', refresh)

function refresh(){
    const hour = Math.floor(Math.random()*24);
    if(hour < 12){
        const phrase = window.document.querySelector('p#phrase');
        phrase.innerHTML = `São exatamente ${hour} horas.`;
        
        const img = window.document.querySelector('img');
        img.setAttribute('src', 'manha.jpg')

        window.document.body.style.background = '#555C7E'
    } else if(hour < 18){
        const phrase = window.document.querySelector('p#phrase');
        phrase.innerHTML = `São exatamente ${hour} horas.`
        
        const img = window.document.querySelector('img');
        img.setAttribute('src', 'tarde.jpg')

        window.document.body.style.background = '#DF5002'
    } else {
        const phrase = window.document.querySelector('p#phrase');
        phrase.innerHTML = `São exatamente ${hour} horas.`
        
        const img = window.document.querySelector('img');
        img.setAttribute('src', 'noite.jpg')

        window.document.body.style.background = '#182f3b'
    }
}