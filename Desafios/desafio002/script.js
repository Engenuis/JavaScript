const butt = window.document.querySelector('input.button');
butt.addEventListener('click', gender);
function gender(){
    const sexMasc = window.document.querySelector('input#masc');
    const verifyM = sexMasc.checked;
    const sexFem = window.document.querySelector('input#fem');
    const verifyF = sexFem.checked;
    let newText = window.document.querySelector('p#text');
    const date = new Date();
    const year = date.getFullYear();
    const input = window.document.querySelector('input#iyear');
    const birth = Number(input.value)
    const numYear = year - birth;
    if(verifyM && birth <= year && numYear < 18){
        let text = window.document.querySelector('p#text')
        text.innerHTML = `Detectamos Garoto com ${numYear} anos`
        let img = window.document.querySelector('img')
        img.style.display = 'block'
        img.setAttribute('src', 'imagens/garoto.jpg')
        window.document.body.style.background = '#6B6250'
        
    }else if(verifyM && birth <= year && numYear <= 60){
        let text = window.document.querySelector('p#text')
        text.innerHTML = `Detectamos Homem com ${numYear} anos`
        let img = window.document.querySelector('img')
        img.style.display = 'block'
        img.setAttribute('src', 'imagens/homem.jpg')
        window.document.body.style.background = '#657CA8'

    } else if(verifyM && birth <= year){
        let text = window.document.querySelector('p#text')
        text.innerHTML = `Detectamos Idoso com ${numYear} anos`
        let img = window.document.querySelector('img')
        img.style.display = 'block'
        img.setAttribute('src', 'imagens/idoso.jpg')
        window.document.body.style.background = '#DF171D'

    } else if(verifyF && birth <= year && numYear < 18){
        let text = window.document.querySelector('p#text')
        text.innerHTML = `Detectamos Garota com ${numYear} anos`
        let img = window.document.querySelector('img')
        img.style.display = 'block'
        img.setAttribute('src', 'imagens/garota.jpg')
        window.document.body.style.background = '#6B6250'
        
    }else if(verifyF && birth <= year && numYear <= 60){
        let text = window.document.querySelector('p#text')
        text.innerHTML = `Detectamos Mulher com ${numYear} anos`
        let img = window.document.querySelector('img')
        img.style.display = 'block'
        img.setAttribute('src', 'imagens/mulher.jpg')
        window.document.body.style.background = '#cb8948'

    } else if(verifyF && birth <= year){
        let text = window.document.querySelector('p#text')
        text.innerHTML = `Detectamos Idosa com ${numYear} anos`
        let img = window.document.querySelector('img')
        img.style.display = 'block'
        img.setAttribute('src', 'imagens/idosa.jpg')
        window.document.body.style.background = '#563334'
    }
}