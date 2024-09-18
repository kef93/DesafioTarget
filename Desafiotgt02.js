// Função para verificar a existência e contar a letra 'a' (maiúscula ou minúscula)
function verificarLetraA(str) {
    let contador = 0;

    // Converte a string em um array de caracteres e percorre cada caractere
    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            contador++;
        }
    }

    // Verifica se a letra 'a' foi encontrada
    if (contador > 0) {
        console.log(`A letra 'a' aparece ${contador} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// String informada (pode ser alterada ou capturada via input do usuário)
let stringInformada = "Aprendendo a programar em JavaScript!"; // Exemplo

// Chama a função para verificar a string
verificarLetraA(stringInformada);
