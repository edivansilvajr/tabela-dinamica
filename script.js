const button = document.getElementById('button');
const valores = [];

const tableDados = document.getElementById('dadosTabela');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr1 = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th1texto = document.createTextNode('Nome');
const th2texto = document.createTextNode('Idade');
const th3texto = document.createTextNode('Ação');

thead.appendChild(tr1);
tr1.appendChild(th1);
th1.appendChild(th1texto);
tr1.appendChild(th2);
th2.appendChild(th2texto);
tr1.appendChild(th3);
th3.appendChild(th3texto);
tableDados.appendChild(thead);

function adicionar() {
    const nome = document.getElementById('nome');
    const txtidade = document.getElementById('idade');
    const idade = Number(txtidade.value);

    if (txtidade.value.length === 0 || nome.value.length === 0) {
        alert('Por favor preencha os campos necessários');
    } else if (isNaN(txtidade.value)) {
        alert('[ERRO campo: Idade] Valor inválido, favor inserir números');
    } else if (!isNaN(nome.value)) {
        alert('[ERRO campo: Nome] Valor inválido, favor inserir seu nome corretamente');
    } else if (idade < 18 || idade > 100) {
        alert('Sua idade não se adequa aos pré requisitos');
    } else {
        if (valores.indexOf(nome.value.toUpperCase()) !== -1) {
            alert('Esse nome ja foi cadastrado anteriormente');
        } else {
            valores.push(nome.value.toUpperCase());

            const tr2 = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const btn = document.createElement('button');
            btn.setAttribute('id', valores.length - 1);

            const td1texto = document.createTextNode(nome.value);
            const td2texto = document.createTextNode(idade);
            const btntexto = document.createTextNode('Excluir');

            tr2.appendChild(td1);
            td1.appendChild(td1texto);
            tr2.appendChild(td2);
            td2.appendChild(td2texto);
            tr2.appendChild(td3);
            td3.appendChild(btn);
            btn.appendChild(btntexto);
            tbody.appendChild(tr2);
            tableDados.appendChild(tbody);

            function excluir(event) {
                const index = event.target.id;
                tr2.remove();
                valores.splice(index, 1);

                // Atualiza os atributos 'id' dos botões
                const buttons = document.querySelectorAll('button');
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].setAttribute('id', i);
                }
            }


            btn.addEventListener('click', excluir);
        }
    }
}

button.addEventListener('click', adicionar);

