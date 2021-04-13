const url = 'http://localhost:3009/api/v1';
// let exibir = document.querySelector('BTN');
const button = document.querySelector("button");
const div = document.querySelector('div');

// var h2 = document.createElement('h2')


// Make a request for a user with a given ID
function exibirTarefas(){
axios.get(url+'/tarefas')
  .then(function (response) {
    // handle success
    for(var key in response.data){
      let value = response.data[key];
      var newcontent = document.createElement('aside');
      console.log(value)
      newcontent.innerHTML =  value['descricao'] +  '\n' + value['data']
      div.appendChild(newcontent);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {

  });
}

button.onclick = exibirTarefas;
