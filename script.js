let button = document.getElementById('button')
let cadastro = []

let tableDados = document.getElementById('dadosTabela')
let thead = document.createElement('thead')
let tr1 = document.createElement('tr')
let th1 = document.createElement('th')
let th2 = document.createElement('th')
let th3 = document.createElement('th')
let th1texto = document.createTextNode('Nome')
let th2texto = document.createTextNode('Idade')
let th3texto = document.createTextNode('Ação')

tableDados.appendChild(thead).appendChild(tr1).appendChild(th1).appendChild(th1texto)
tableDados.appendChild(thead).appendChild(tr1).appendChild(th2).appendChild(th2texto)
tableDados.appendChild(thead).appendChild(tr1).appendChild(th3).appendChild(th3texto)





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
        let tr2 = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let btn = document.createElement('button')
        

        let td1texto = document.createTextNode(nome.value)
        let td2texto = document.createTextNode(idade)
        let btntexto = document.createTextNode('Excluir')

        thead.appendChild(tr2).appendChild(td1).appendChild(td1texto)
        thead.appendChild(tr2).appendChild(td2).appendChild(td2texto)
        thead.appendChild(tr2).appendChild(td3).appendChild(btn).appendChild(btntexto)


        cadastro.push(nome.value.toUpperCase())

        

        
    }
    
}

button.addEventListener('click', adicionar)