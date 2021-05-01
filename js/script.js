// const url = 'http://localhost:3009/api/v1'; # Local 
const url = 'http://ini-digital.herokuapp.com/api/v1' //Server
let div = document.querySelector('#eventos');
let divArtigos = document.querySelector('#eventosArtigos');

let body = document.querySelector('body');
let exibir = document.querySelector('#BTN');
var h2 = document.createElement('h2')


// exibição de tarefas
function exibirTarefas(){
axios.get(url+'/tarefas')
  .then(function (response) {
    // handle success
    for(var key in response.data){
      let value = response.data[key];
      
      var aside = document.createElement('aside');
      aside.classList.add('evento')
      
      var linha = document.createElement('div');
      linha.setAttribute("id","linha-horizontal")
      
      var imgEvento = document.createElement('img');
      imgEvento.setAttribute("id","imagemEvento")

      var dataEvento = document.createElement('h4');
      dataEvento.setAttribute("id","dataEvento")
      
      var categoria = document.createElement('h3')
      categoria.setAttribute("id","categoria")

      var descricao = document.createElement('span');
      descricao.setAttribute("id","descricao")
      
      // console.log(value)
      imgEvento.src = value['linkimagem'] //Futura alteração 'https://www.plataformamedia.com/wp-content/uploads/2020/06/imagem-preta.jpg'
      dataEvento.innerHTML =value['data'] //Inserindo a data do evento
      categoria.innerHTML = value['categoria'] //Inserindo a categoria do evento
      descricao.innerHTML = value['descricao'] //Inserindo a descrição do evento
      aside.appendChild(imgEvento);
      aside.appendChild(dataEvento);
      aside.appendChild(linha);
      aside.appendChild(categoria);
      aside.appendChild(descricao);
      div.appendChild(aside);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {

  });
// ARTIGOS -------------------------------------
  axios.get(url+'/artigos')
    .then(function (response) {
      // handle success
      for(var key in response.data){
        let value = response.data[key];
        
        var aside = document.createElement('aside');
        aside.classList.add('evento')
        
        var linha = document.createElement('div');
        linha.setAttribute("id","linha-horizontal-artigo")
        
        var imgEvento = document.createElement('img');
        imgEvento.setAttribute("id","imagemEvento")
  
        var tituloTexto = document.createElement('h4');
        tituloTexto.setAttribute("id","tituloTexto")
        
        var autor = document.createElement('h4')
        autor.setAttribute("id","autor")
  
        var descricao = document.createElement('span');
        descricao.setAttribute("id","descricao")

        var containner = document.createElement('div');
        containner.setAttribute("id","containner");

        var link = document.createElement('a');
        link.setAttribute("id","linkArtigo")
        // console.log(value)
        imgEvento.src = value['linkimagem'] // Adicionando a imagem
        tituloTexto.innerHTML =value['titulo'] //Inserindo a data do atigo
        descricao.innerHTML = value['descricao'] //Inserindo a descrição do artigo
        autor.innerHTML = value['autor'] //Inserindo o autor do artigo
        link.href = value['linkartigo'] //Link Artigo
        link.target = 'blank'

        aside.appendChild(imgEvento);
        containner.appendChild(tituloTexto);
        containner.appendChild(linha);
        containner.appendChild(autor);
        containner.appendChild(descricao);
       
        link.appendChild(containner)
        aside.appendChild(link)
        divArtigos.appendChild(aside);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
  
    });
}


body.onload = exibirTarefas;
// exibir.onclick = exibirTarefas;
