const butt = window.document.querySelector('input.button');
butt.addEventListener('click', tabuada);

function tabuada(){
    const textArea = window.document.querySelector('textarea');
    
    const recipe = window.document.querySelector('input#inumber');
    const number = Number(recipe.value);

    if(number !== 0){

    let finalText = '';

    for(let a = 1; a <= 10; a++){
    finalText += `
    ${a} x ${number} = ${a*number}
    `;
    };

    textArea.innerHTML = finalText;
    
    } else{
        window.alert('Digite um número')
    }
}