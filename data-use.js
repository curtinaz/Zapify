var dados;

fetch('./data.json')
  .then(response => {
      return response.json();
  })
  .then (data => {
    dados = data;
  });