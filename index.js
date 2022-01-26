const buttonCopiar = document.getElementById('btn-copiar')
buttonCopiar.onclick = copiar;


const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const linkedinInput = document.getElementById('linkedin');
const cargosInput = document.getElementById('cargos');
const celularInput = document.getElementById('celular');


nomeInput.addEventListener('input', () => btn())
sobrenomeInput.addEventListener('input', () => btn())
linkedinInput.addEventListener('input', () => btn())
cargosInput.addEventListener('input', () => btn())
celularInput.addEventListener('input', () => btn())


const nomeCompletoField = document.getElementById('nome-assinatura');
const linkedinField = document.getElementById('linkedin-assinatura');
const cargoField = document.getElementById('cargo-assinatura');
const celularField = document.getElementById('celular-assinatura');

function btn() {
  var nome = nomeInput.value;
  var sobrenome = sobrenomeInput.value;
  var linkedin = linkedinInput.value;
  var cargo = cargosInput.value;
  var celular = celularInput.value;

  let nomeCompleto = nome + ' ' + sobrenome
  nomeCompletoField.innerHTML = editaNome(nomeCompleto);
  linkedinField.innerHTML = linkedin;
  cargoField.innerHTML = cargo;
  celularField.innerHTML = celular;

    // configura os atributos de link
    celularField.setAttribute('href', `https://wa.me/55${editaCelular(celular).replace(/ /g, '')}`);
    // wa.me e o site que redireciona para o whatsapp com o numero a frente
}

function editaNome(nome) {
  let palavras = nome.split(' ')
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = primeirasMaiusculas(palavras[i])
  }
  if (palavras.join(' ') == ' ') {
    return 'Nome Sobrenome'
  }
  return palavras.join(' ')
}

function primeirasMaiusculas(palavra) {
  let n = palavra.length;
  if (n > 1) {
    let primeiraLetra = palavra[0].toUpperCase() 
    let resto = palavra.slice(1) 
    palavra = primeiraLetra + resto; 
    return palavra
  } else {
    return palavra.toUpperCase()
  }
}



function copiar() {
  var area = document.getElementById("assinatura-div");
  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(area);
    range.select();
    document.execCommand("Copy");
    alert("Copiado para a area de tranferencia");
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(area);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copiado item para area de tranferencia");
  }
}
