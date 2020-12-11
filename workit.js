var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('./data.json',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    alert(data[0].Nome);
    rafa = data[0].Nome;
  }
});

rafa = data[0].Nome