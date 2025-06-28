// limpar_campos    => snake case
// limparCampos     => camel case
// LimparCampos     => pascal case
// limpar-campos    => kebab case

// Padrão de nomenclatura para uma função em js é camel case
function limparCampos() {
    // Padrão de nomenclatura de variável em js é camel case
    let inputNome = document.querySelector("#campo-nome");
    // Definir o valor do campo como uma string vazia, ou seja, limpar o campo
    inputNome.value = "";

    let inputSobrenome = document.querySelector("#campo-sobrenome");
    inputSobrenome.value = "";

    let inputIdade = document.querySelector("#campo-idade");
    inputIdade.value = "";

    let inputClasse = document.querySelector("#campo-classe");
    inputClasse.value = "";

    let inputModalidade = document.querySelector("input[name='modalidade']:checked");
    // Necessário validar que o usuário escolheu alguma modalidade, caso contrário a 
    // limpeza não funcionará para os demais campos
    if (inputModalidade !== null) {
        inputModalidade.checked = false;
    }

    let inputEstrangeiro = document.querySelector("#campo-estrangeiro");
    inputEstrangeiro.checked = false;
}

function calcularMedia() {
    let inputNota1 = document.querySelector("#campo-nota1");
    let inputNota2 = document.querySelector("#campo-nota2");
    let inputNota3 = document.querySelector("#campo-nota3");

    let nota1 = parseFloat(inputNota1.value);
    let nota2 = parseFloat(inputNota2.value);
    let nota3 = parseFloat(inputNota3.value);

    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function preencherCampoMedia() {
    let spanMedia = document.querySelector("#media-valor");

    let media = calcularMedia();

    let mediaFormatada = media.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    spanMedia.innerHTML = mediaFormatada;
}

function cadastrar() {
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;

    let inputSobrenome = document.querySelector("#campo-sobrenome");
    let sobrenome = inputSobrenome.value;

    let inputIdade = document.querySelector("#campo-idade");
    let idade = inputIdade.value;

    let inputClasse = document.querySelector("#campo-classe");
    let classe = inputClasse.value;

    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    if (campoModalidade === null) {
        alert("Escolha uma modalidade");
        return; // Encerra a execução da função
    }

    let modalidade = campoModalidade.value;

    let campoEstrangeiro = document.querySelector("#campo-estrangeiro");
    let estrangeiro = campoEstrangeiro.checked;

    let textarea = document.querySelector("#campo-alunos");
    // Fluxo para acumular dados em uma string
    // variavel = variavel + novo
    // let texto = "Abacate";
    // texto = texto + " Pera"; // Abacate Pera
    // texto = texto + " Uva";  // Abacate Pera Uva
    textarea.value = textarea.value + "\nNome: " + nome +
        "\nSobrenome: " + sobrenome +
        "\nIdade: " + idade +
        "\nClasse: " + classe +
        "\nModalidade: " + modalidade +
        "\nEstrangeiro: " + estrangeiro +
        "\n----------------------------------------";

    alert("Cadastro realizado com sucesso");
}

/*
 Ex.1: Criar uma página (paginas/exercicio01.html) com os seguintes itens:
    - campo texto nome do produto (ter label para cada campo)
    - campo number quantidade
    - campo number preço unitário com step 0.01
    - botao cadastrar que chama a função no onclick "registrar()"

Criar o script assets/js/exercicio01.js
    Criar função registrar()    
        Pegar o campo do nome do produto por id
        Pegar o valor do campo do nome do produto
        Apresentar o nome do produto
        Fazer o mesmo para os d+ campos
Ex. 2: Criar uma página (paginas/exercicio02-reclamacao.html) com os seguintes itens:
    - Campo de nome do reclamente
    - Campo e-mail
    - Campo reclamação (textarea)
    - Botão de enviar reclamação
    - Textarea de reclamações registradas
Criar o script assets/js/exercicio02-reclamacao.js
    - Pegar os dados dos campos e colocar na textarea de reclamações 
 */