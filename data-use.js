var dados;

fetch('./data.json')
  .then(response => {
      return response.json();
  })
  .then (data => {
    dados = data;

    startThis();
  });

  /* FUNCIONAMENTO DA API */

     var userID = 0;
//   var baseURL = `https://api.whatsapp.com/send?phone=`;
//   var userDDD = dados.[userID].DDD;

function startThis() {

    for(userID=0; userID<=dados.length; userID=++) {
        console.log ("usuario 1");
    }

    document.querySelector("#userName").innerHTML = dados[0].Nome;
}

// https://api.whatsapp.com/send?phone=5551996842817&text=Boa%20tarde%2C%20Me%20chamo%20Fernanda%2C%20da%20Cin%C3%A9tica%20Edu!