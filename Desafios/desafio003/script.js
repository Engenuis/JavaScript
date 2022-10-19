const react = window.document.querySelector('input#button');
react.addEventListener('click', counter);

function counter(){
    const begin = window.document.querySelector('input#istart');
    const firstCounter = Number(begin.value);
    
    const finish = window.document.querySelector('input#iend');
    const lastCounter = Number(finish.value);
    
    const step = window.document.querySelector('input#istep');
    const mainCounter = Number(step.value);

    let finalText =''

    for(let a = firstCounter; a <= lastCounter; a+= mainCounter){
        if(a == lastCounter){
            finalText += String(a)
        }else {
            finalText += String(a + ' ') + ' &#x1F449 ' 
        }
    }
    console.log(finalText)
    const textCreation = window.document.createElement('p')
    textCreation.innerHTML = finalText;
    const div = window.document.querySelector('div.text')
    div.appendChild(textCreation)
}