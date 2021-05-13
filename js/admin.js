// const url = 'http://localhost:3009/api/v1'; // Local 
const url = 'http://ini-digital.herokuapp.com/api/v1' //Server
let div = document.querySelector('#eventos');
let div_categoria = document.querySelector('#categorias');
let body = document.querySelector('body');
let exibir = document.querySelector('#BTN');
let exibirCat = document.querySelector('#BTN_CAT');
var h2 = document.createElement('h2')

//Eventos
let BTNInserirEventos = document.querySelector('#inserir_eventos');
let inputDescricao = document.querySelector('#input_descricao');
let inputData = document.querySelector('#input_data');
let inputRealizado = document.querySelector('#input_realizado');
let inputCategoria = document.querySelector('#input_categoria');
let input_linkImagem = document.querySelector('#input_linkimagem');

//Alteração
let BTNAlterarEventos = document.querySelector('#alterar_eventos');
let inputIdEventoAlterar = document.querySelector('#input_idEvento');
let inputDescricaoAlterar = document.querySelector('#input_descricaoAlteracao');
let inputDataAlterar = document.querySelector('#input_dataAlteracao');
let inputRealizadoAlterar = document.querySelector('#input_realizadoAlteracao');
let inputCategoriaAlterar = document.querySelector('#input_categoriaAlteracao');

// Categorias
let input_Categoria = document.querySelector('#input_descricao_cat');
let BTNInserirCategorias = document.querySelector('#inserir_categorias');

function exibirTarefas(){

axios.defaults.headers.common['access_token'] = location.href.split('?')[1];
axios.get(url+'/admRouter/eventos')
  .then(function (response) {
    // handle success
    for(var key in response.data){
      let value = response.data[key];
      
      var aside = document.createElement('aside');
      aside.classList.add('evento')
      
      var linha = document.createElement('div');
      // linha.setAttribute("id","linha-horizontal")
      
      var imgEvento = document.createElement('li');
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
      imgEvento.innerHTML =value['linkimagem'] // Inserindo i
      id.innerHTML = value['id'] //Inserindo a data do evento
      // dataC = moment(value['data'], 'DD/MM/YYYY HH:mm:ss', true).format('YYYY-MM-DD HH:mm:ss')
      // var data = new Date(value['data']);
      // data.format("YYYY-MM-DD")
      var data = new Date(value['data']);

      dataEvento.innerHTML = data.toLocaleDateString()
      // value['data'].toUTCString()
      // new Intl.DateTimeFormat('pt-br').format(value['data']) //Inserindo a data do evento
      categoria.innerHTML = value['categoria'] //Inserindo a categoria do evento
      descricao.innerHTML = value['descricao'] //Inserindo a descrição do evento
      status.innerHTML = value['realizado'] //Inserindo a descrição do evento
      aside.appendChild(id);
      aside.appendChild(dataEvento);
      aside.appendChild(linha);
      aside.appendChild(categoria);
      aside.appendChild(descricao);
      aside.appendChild(status);
      aside.appendChild(imgEvento);
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
  // axios.defaults.headers.common['access_token'] = window.localStorage.access_token;
  
axios.defaults.headers.common['access_token'] = location.href.split('?')[1];
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
    categoria_id:inputCategoria.value,
    linkimagem: input_linkImagem.value
  }
  
axios.defaults.headers.common['access_token'] = location.href.split('?')[1];
  axios.post(url+'/admRouter/inserirevento', params)
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
  input_linkImagem.value = ''
}

function alterarEvento(){
  params = {
    descricao: inputDescricaoAlterar.value,
    data: inputDataAlterar.value,
    realizado:inputRealizadoAlterar.value,
    categoria_id:inputCategoriaAlterar.value,
  }
  
axios.defaults.headers.common['access_token'] = location.href.split('?')[1];
  axios.put(url+'/admRouter/'+inputIdEventoAlterar.value, params)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  inputDescricaoAlterar.value = ''
  inputDataAlterar.value = ''
  inputRealizadoAlterar.value = ''
  inputCategoriaAlterar.value = ''
  inputIdEventoAlterar.value = ''
}

function inserirCategoria(){
  params = {
    descricao: input_Categoria.value,
  }
  // console.log(params);
  // axios.defaults.headers.common['access_token'] = window.localStorage.access_token;
  
axios.defaults.headers.common['access_token'] = location.href.split('?')[1];
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
BTNAlterarEventos.onclick = alterarEvento;
BTNInserirCategorias.onclick = inserirCategoria;