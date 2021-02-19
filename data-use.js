var dados;

fetch('./data.json')
  .then(response => {
      return response.json();
  })
  .then (data => {
    dados = data;

    startThis();
  });


function startThis() {
    document.querySelector("#userName").innerHTML = dados[1].Nome;
}