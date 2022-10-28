let button = document.getElementById('button')
let valores = []

let tableDados = document.getElementById('dadosTabela')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
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
        txtidade.value = ''
        txtidade.focus()
    } else if(!isNaN(nome.value)) {
        alert('[ERRO campo: Nome] Valor inválido, favor inserir seu nome corretamente')
    } else if (idade < 18 || idade > 100) {
        alert('Sua idade não se adequa aos pré requisitos')
    
    } else {
        

        if(valores.indexOf(nome.value.toUpperCase()) != -1) {
            alert('Esse nome ja foi cadastrado anteriormente')
            nome.value = ''
            txtidade.value = ''
            nome.focus()
        } else {
            valores.push(nome.value.toUpperCase())
            let busca = valores[0]

            var tr2 = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            var btn = document.createElement('button')
            

            for(var pos = 0; pos < valores.length; pos++) {
                btn.setAttribute('id', pos)  
                let btndelete = document.getElementById(pos)
            }

            

            let td1texto = document.createTextNode(nome.value)
            let td2texto = document.createTextNode(idade)
            let btntexto = document.createTextNode('Excluir')

            thead.appendChild(tr2).appendChild(td1).appendChild(td1texto)
            thead.appendChild(tr2).appendChild(td2).appendChild(td2texto)
            thead.appendChild(tr2).appendChild(td3).appendChild(btn).appendChild(btntexto)

            function excluir() {
                tr2.remove()
                valores.pop()
            }

            btn.addEventListener('click', excluir)
            
            nome.value = ''
            txtidade.value = ''
            nome.focus()
        } 
    }
    
    
}

button.addEventListener('click', adicionar)
