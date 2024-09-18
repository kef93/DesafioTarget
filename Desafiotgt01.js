// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceAFibonacci(numero) {
    // Começando a sequência de Fibonacci com 0 e 1
    let a = 0, b = 1;

    // Verifica casos triviais: 0 e 1
    if (numero === a || numero === b) {
        return true;
    }

    // Gera a sequência de Fibonacci até encontrar o número ou superar ele
    let proximo = a + b;
    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        // Atualiza os valores para o próximo cálculo
        a = b;
        b = proximo;
        proximo = a + b;
    }

    // Se o número não foi encontrado, ele não pertence à sequência
    return false;
}

// Número informado (pode ser alterado ou capturado via input do usuário)
let numeroInformado = 21; // Exemplo: altere esse valor para testar outros números

// Verifica se o número pertence à sequência de Fibonacci e exibe a mensagem
if (pertenceAFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
