const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const textoTitulo = "Sobre mim:";
const textoDescricao = "Olá, meu nome é João Wängler, Sou estudante de Engenharia de Software na Universidade de Vassouras. Apaixonado por tecnologia desde sempre, estou sempre buscando aprender e aplicar novos conhecimentos na área. ";

let index = 0;

function digitarTitulo() {
    titulo.textContent += textoTitulo[index];
    index++;
    if (index < textoTitulo.length) {
        setTimeout(digitarTitulo, 40); // Altere o tempo de espera para ajustar a velocidade da digitação
    } else {
        // Chama a função para iniciar a digitação da descrição após a digitação do título ser concluída
        setTimeout(digitarDescricao, 1000); // Espera 1.5 segundos antes de iniciar a digitação da descrição
    }
}

function digitarDescricao() {
    descricao.textContent += textoDescricao[index - textoTitulo.length];
    index++;
    if (index < textoTitulo.length + textoDescricao.length) {
        setTimeout(digitarDescricao, 40); // Altere o tempo de espera para ajustar a velocidade da digitação
    }
}

digitarTitulo();
