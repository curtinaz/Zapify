var dados;

fetch('./data.json')
  .then(response => {
      return response.json();
  })
  .then (data => {
    dados = data;

    startThis();
  });

  /* ADICIÇÃO DO SLEEP */

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* FUNCIONAMENTO DA API */

     var userID = 0;
     var baseURL = `https://api.whatsapp.com/send?phone=55`;

    //  var finalURL = `$(baseURL)$(userDDD)$(userNUMBER)`

function startThis() {

    var mensagem = `Oi ${(dados[userID].Nome).split(' ').shift()}, tudo bem?`;

    document.querySelector("#userName").innerHTML = (dados[userID].Nome).split(' ').shift()
    document.querySelector("#whats").href = `${baseURL}${dados[userID].DDD}${dados[userID].Telefone}&text=${mensagem}`;

}

async function nextUser() {
  await sleep(1000); // Tempo necessário para a atualização de userID
  userID++;
  startThis();
}

// https://api.whatsapp.com/send?phone=5551996842817&text=Boa%20tarde%2C%20Me%20chamo%20Fernanda%2C%20da%20Cin%C3%A9tica%20Edu!