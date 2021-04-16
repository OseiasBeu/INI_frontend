// const url = 'http://localhost:3009/api/v1'; # Local 
const url = 'http://ini-digital.herokuapp.com/api/v1' //Server
let div = document.querySelector('#eventos');
let body = document.querySelector('body');
let exibir = document.querySelector('#BTN');
var h2 = document.createElement('h2')


// Make a request for a user with a given ID
function exibirTarefas(){
axios.get(url+'/tarefas')
  .then(function (response) {
    // handle success
    for(var key in response.data){
      let value = response.data[key];
      
      var aside = document.createElement('aside');
      aside.classList.add('evento')
      
      var linha = document.createElement('div');
      // linha.setAttribute("id","linha-horizontal")
      
      var imgEvento = document.createElement('img');
      imgEvento.setAttribute("class","li")

      var dataEvento = document.createElement('li');
      dataEvento.setAttribute("class","li")
      
      var categoria = document.createElement('li')
      categoria.setAttribute("class","li")

      var descricao = document.createElement('li');
      descricao.setAttribute("class","li")

      var status = document.createElement('li');
      status.setAttribute("class","li")

      var id = document.createElement('li');
      id.setAttribute("class","li")
      // descricao.setAttribute("id","descricao")
      
      console.log(value)
      imgEvento.src ='https://www.plataformamedia.com/wp-content/uploads/2020/06/imagem-preta.jpg' //value['imagem'] //Futura alteração
      id.innerHTML = '0'//value['id'] //Inserindo a data do evento
      dataEvento.innerHTML =value['data'] //Inserindo a data do evento
      categoria.innerHTML = value['categoria'] //Inserindo a categoria do evento
      descricao.innerHTML = value['descricao'] //Inserindo a descrição do evento
      status.innerHTML = 'False' //value['realizado'] //Inserindo a descrição do evento
    //   aside.appendChild(imgEvento);
      aside.appendChild(id);
      aside.appendChild(dataEvento);
      aside.appendChild(linha);
      aside.appendChild(categoria);
      aside.appendChild(descricao);
      aside.appendChild(status)
      div.appendChild(aside);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {

  });
}

// body.onload = exibirTarefas;
exibir.onclick = exibirTarefas;
