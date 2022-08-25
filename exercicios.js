/* 
  Econtre a solução ao problema:

  Pergunte o nome do usuário e escreva a mensagem:

  "Olá, [nome do usuário]"
  let nome = prompt('Qual seu nome ?')
  alert('Olá, ' +nome)
                          */

                         
                         
                         
                         
                         
                         
// ***Operações matemáticas básicas*** 
/*sum = x + y;
minus = x - y;
mult = x*y;
div = x/y;
restDiv = x % y;


alert('Resultado para a soma: ' +sum);
alert('Resultado para a subtração: ' +minus);
alert('Resultado para a multiplicação: ' +mult);
alert('Resultado para a divisão: ' +div);
alert('Resultado para o resto da divisão: ' +restDiv)*/


// ***Média do aluno ***

/*let nome = prompt('Informe seu nome: ')
let n1 = prompt("Digite a primeira nota:");
let n2 = prompt('Digite o segunda nota:');
let n3 = prompt('Digite o segunda nota:');

x = Number(n1);
y = Number(n2);
z = Number(n3)

let media = ((x + y + z)/3);

media = media.toFixed(2);

let result = media > 6;

if(result) {
  alert('Parabéns, ' +nome+ '! Você foi aprovado com a média: ' +media);

}else if (result < 5 && result > 3) {
  alert('Calma, deu ruim mas da pra recuperar, '+ nome + ' Sua média foi: ' +media);
}
else {
  alert('Deu ruim, ' +nome+ ' :(((. Sua nota foi: ' + media);
}
*/


//*** Fazer uma lista ***

/*let items = []

for(let item = 0; item < 10; item++) {

  let list = prompt("Digite o componente da lista: " + (item + 1));

  items[item] = list;
}

alert('Os itens adicionados são: ' + items.join(', '))*/


/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
  
  let result = prompt('Adivinha o número que estou pensando? Está entre 0 e 10')
  const randomNumber = Math.round(Math.random()*10)
  let xAttempts = 1;
  
  while(Number(result) != randomNumber) {
    result = prompt('Errouuuuu! Tente novamente: ')
    xAttempts++
  }
  
  alert(`Parabénsss! O número que eu estava pensando era ${randomNumber}. Você adivinhou o número em ${xAttempts} tentativas`)
  */