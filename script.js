function validarCampo() {
      const campoInputNome = document.getElementById("campoInputNome");//foi criada uma const porque ela vai ser inicada com um valor na mesma linha em que e declarada, depois cria a variavel campoInputNome e usa o document.getElementbyId e o id do elemento que ele vai buscar no html para atribuit a esta variavel
      const valorInputNome = campoInputNome.value; //aqui ele cria outra constante que vai salvar a criada acima com o .value que e o valor recebido do input do html

      const campoInputEmail = document.getElementById("campoInputEmail");
      const valorInputEmail = campoInputEmail.value;

      // Verifica se algum dos campos está vazio
      if (valorInputNome.trim() === '' || valorInputEmail.trim() === '') { //o .trim ele e uma função para remover espaços em branco, ele e usado para garantir que aquele espaço não vai ficar em branco
        // Se algum campo estiver vazio, exibe alerta e impede o envio do formulário
        alert("Por favor, preencha todos os campos antes de continuar.");
        return false; // retorna false para não continuar o comando e deixar o usuario digitar novamente
      }
       // Verifica se o campoInputNome contém apenas letras (sem números)
  if (!/^[A-Za-z\s]+$/.test(valorInputNome)) { // ! - simbolo de diferente no caso diferentes dos caraters definidos: ^ inicio de uma string A-Za-z e letras maiuscula e minusculas \s espaço em branco o + significa que letras e espaços podem ocorrer mais de uma vez $ indica o final da string, o teste verifica se esta espressão coreesponde a string ele retorna true se for diferente e false se for igual 
    alert("O campo Nome não pode conter números.");
    return false;
  }
  const checkbox = document.getElementById("exampleCheck1");
      if (!checkbox.checked) {
        alert("Por favor, aceite os termos antes de prosseguir.");
        return false;
      }

  return true;
      // Caso ambos os campos estejam preenchidos, permite o envio do formulário
      return true;
    }
    function termos(){
      if(termos){
        var mensagemTermo = "você é um 22";
        document.getElementById('msgtermos').innerHTML = mensagemTermo;
      }
      
    }
