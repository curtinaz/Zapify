var dados;

fetch('./data.json')
  .then(response => {
      return response.json();
  })
  .then (data => {
    dados = data;
  });


  startThis() {
    document.querySelector("#userName").value = dados[1];
  }