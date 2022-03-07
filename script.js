//criação da função principal
function comparaNumeros(num1, num2) { 
    //criação das funções auxiliares juntamente da definição das constantes e dos parâmetros (numeros)
	const primeiraFrase = criaPrimeiraFrase(num1, num2); 
	const segundaFrase = criaSegundaFrase(num1, num2);

    //retorno concatenado das duas funções
	return `${primeiraFrase} ${segundaFrase}`;
}

//prmieira função auxiliar
function criaPrimeiraFrase(num1, num2) {
    //string auxiliar vazia para definir se será inserido o 'não' após condição
    let saoIguais = "";
    //condição para análise da desigualdade para acrescentar o 'não'
    if (num1 !== num2){
        saoIguais = 'não';
    }
    //retorno da primeira frase após decidir se será inserido o 'não'
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

//segunda função auxiliar
function criaSegundaFrase(num1,num2){
    //definição de const para receber o valor da soma
    const soma = num1 + num2;

    //definição de string com default 'menor' a ser modificada na condicional
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    //definição de const a ser usada na condicional para comparação
    const compara10 = soma>10;
    const compara20 = soma>20;

    //condicional para verificar a condição e mudar variável e string para 'maior'
    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 ='maior';
    }


    //retorno da segunda frase após definição de 'menor' ou 'maior'
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(20, 20));