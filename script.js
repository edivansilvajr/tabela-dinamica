let button = document.getElementById('button')

let tableDados = document.getElementById('dadosTabela')
let thead = document.createElement('thead')
let tr = document.createElement('tr')
let th1 = document.createElement('td')
let th2 = document.createElement('td')
let th3 = document.createElement('td')
let th1texto = document.createTextNode('Nome')
let th2texto = document.createTextNode('Idade')
let th3texto = document.createTextNode('Ação')

tableDados.appendChild(thead).appendChild(tr).appendChild(th1).appendChild(th1texto)
tableDados.appendChild(thead).appendChild(tr).appendChild(th2).appendChild(th2texto)
tableDados.appendChild(thead).appendChild(tr).appendChild(th3).appendChild(th3texto)





function adicionar() {
    let nome = document.getElementById('nome')
    let txtidade = document.getElementById('idade')
    let idade = Number(txtidade.value)
    
    if(txtidade.value.length == 0 || nome.value.length == 0) {
        alert('Por favor preencha os campos necessários')
    } else if(isNaN(txtidade.value)) {
        alert('[ERRO campo: Idade] Valor inválido, favor inserir números')
    } else if(!isNaN(nome.value)) {
        alert('[ERRO campo: Nome] Valor inválido, favor inserir seu nome corretamente')
    } else if (idade < 18 || idade > 100) {
        alert('Sua idade não se adequa aos pré requisitos')
    
    } else {
        alert('tudo ok')
    }

    
    
    
}

button.addEventListener('click', adicionar)