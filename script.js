// Obtém a referência do botão
const button = document.getElementById('button');

// Armazena os nomes dos usuários adicionados
const valores = [];

// Obtém a referência da tabela
const tableDados = document.getElementById('dadosTabela');

// Cria elementos HTML para a tabela
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr1 = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');

// Cria texto para os títulos das colunas
const th1texto = document.createTextNode('Nome');
const th2texto = document.createTextNode('Idade');
const th3texto = document.createTextNode('Ação');

// Adiciona os títulos à tabela
thead.appendChild(tr1);
tr1.appendChild(th1);
th1.appendChild(th1texto);
tr1.appendChild(th2);
th2.appendChild(th2texto);
tr1.appendChild(th3);
th3.appendChild(th3texto);

// Adiciona o cabeçalho à tabela
tableDados.appendChild(thead);

// Função chamada quando o botão é clicado
function adicionar() {
    // Obtém os valores dos campos "Nome" e "Idade"
    const nome = document.getElementById('nome');
    const txtidade = document.getElementById('idade');
    const idade = Number(txtidade.value);

    // Verifica se os campos foram preenchidos corretamente
    if (txtidade.value.length === 0 || nome.value.length === 0) {
        alert('Por favor preencha os campos necessários');
    } else if (isNaN(txtidade.value)) {
        alert('[ERRO campo: Idade] Valor inválido, favor inserir números');
    } else if (!isNaN(nome.value)) {
        alert('[ERRO campo: Nome] Valor inválido, favor inserir seu nome corretamente');
    } else if (idade < 18 || idade > 100) {
        alert('Sua idade não se adequa aos pré requisitos');
    } else {
        // Verifica se o nome já foi adicionado anteriormente
        if (valores.indexOf(nome.value.toUpperCase()) !== -1) {
            alert('Esse nome ja foi cadastrado anteriormente');
        } else {
            // Adiciona o nome à lista de nomes
            valores.push(nome.value.toUpperCase());
            // Cria elementos HTML para a nova linha da tabela
            const tr2 = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const btn = document.createElement('button');

            // Define o atributo 'id' do botão como o índice do nome na lista
            btn.setAttribute('id', valores.length - 1);

            // Cria texto para as células da linha
            const td1texto = document.createTextNode(nome.value);
            const td2texto = document.createTextNode(idade);
            const btntexto = document.createTextNode('Excluir');

            // Adiciona as células à linha e a linha à tabela
            tr2.appendChild(td1);
            td1.appendChild(td1texto);
            tr2.appendChild(td2);
            td2.appendChild(td2texto);
            tr2.appendChild(td3);
            td3.appendChild(btn);
            btn.appendChild(btntexto);
            tbody.appendChild(tr2);
            tableDados.appendChild(tbody);

            // Função chamada quando o botão da linha é clicado
            function excluir(event) {
                // Obtém o índice do nome na lista
                const index = event.target.id;

                // Remove a linha da tabela
                tr2.remove();

                // Remove o nome da lista
                valores.splice(index, 1);

                // Atualiza os atributos 'id' dos botões
                const buttons = document.querySelectorAll('button');
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].setAttribute('id', i);
                }
            }

            // Adiciona um evento de clique ao botão da linha
            btn.addEventListener('click', excluir);
        }
    }
}

// Adiciona um evento de clique ao botão principal
button.addEventListener('click', adicionar);
