// const url = 'http://localhost:3009/api/v1'; //Local API endpoint
const url = 'http://ini-digital.herokuapp.com/api/v1' //Server
let form = document.querySelector('form')

let inputEmail = document.querySelector('#email');
let inputPwd = document.querySelector('#pwd');
let BTNlogin = document.querySelector('#login');
// let getToken = requires('admin.getToken');
function login(){
    params = {
      email: inputEmail.value,
      senha: inputPwd.value,
    };
    headers=  {
      'Content-Type':'application/json',
      'Host':'ini-digital.herokuapp.com',
      'Content-Length': 61
    };

    axios.post(url+'/auth/login', params, headers)
    .then(function (response) {
      window.localStorage.setItem('access_token', response.data.token)
      window.location.href = 'admin.html?'+response.data.token;
    })
    .catch(function (error) {
      console.log(error);
      // console.log('aqui não foi')
    }); 
  }

BTNlogin.onclick = login;