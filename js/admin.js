// const url = 'http://localhost:3009/api/v1'; # Local 
const url = 'http://ini-digital.herokuapp.com/api/v1' //Server
let div = document.querySelector('#eventos');
let div_categoria = document.querySelector('#categorias');
let body = document.querySelector('body');
let exibir = document.querySelector('#BTN');
let exibirCat = document.querySelector('#BTN_CAT');
var h2 = document.createElement('h2')

//Formulários
let BTNInserirEventos = document.querySelector('#inserir_eventos');
let inputDescricao = document.querySelector('#input_descricao');
let inputData = document.querySelector('#input_data');
let inputRealizado = document.querySelector('#input_realizado');
let inputCategoria = document.querySelector('#input_categoria');

let input_Categoria = document.querySelector('#input_descricao_cat');
let BTNInserirCategorias = document.querySelector('#inserir_categorias');

function exibirTarefas(){
  // div.clear();
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
      
      // console.log(value)
      imgEvento.src ='https://www.plataformamedia.com/wp-content/uploads/2020/06/imagem-preta.jpg' //value['imagem'] //Futura alteração
      id.innerHTML = value['id'] //Inserindo a data do evento
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

function exibirCategorias(){
  // div.clear();
axios.get(url+'/categorias')
  .then(function (response) {
    // handle success
    for(var key in response.data){
      let value = response.data[key];
      
      var aside = document.createElement('aside');
      aside.classList.add('evento')
      
      var linha = document.createElement('div');
      // linha.setAttribute("id","linha-horizontal")

      var descricao = document.createElement('li');
      descricao.setAttribute("class","li")

      var id = document.createElement('li');
      id.setAttribute("class","li")
  
      // console.log(value)

      id.innerHTML = value['id'] 
      descricao.innerHTML = value['descricao'] 
      aside.appendChild(id);
      aside.appendChild(descricao);
      div_categoria.appendChild(aside);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {

  });
}

function inserirEvento(){
  params = {
    descricao: inputDescricao.value,
    data: inputData.value,
    realizado:inputRealizado.value,
    categoria_id:inputCategoria.value
  }
  console.log(params);
  axios.post(url+'/tarefas', params)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  inputDescricao.value = ''
  inputData.value = ''
  inputRealizado.value = ''
  inputCategoria.value = ''
}


function inserirCategoria(){
  params = {
    descricao: input_Categoria.value,
  }
  console.log(params);
  axios.post(url+'/categorias', params)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  input_Categoria.value = ''
}


// Chamada das funções for
exibir.onclick = exibirTarefas;
exibirCat.onclick = exibirCategorias;
BTNInserirEventos.onclick = inserirEvento;
BTNInserirCategorias.onclick = inserirCategoria;