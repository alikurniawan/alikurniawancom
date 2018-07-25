const btnLogin = document.getElementById('btnLogin');
const fBtnSignup = document.getElementById('fBtnSignup');
const fBtnLogin = document.getElementById('fBtnLogin')
const formModalLogin = document.getElementById('modalLogin');
const btnRegParent = document.getElementById('btnRegParent');


btnLogin.addEventListener('click', function(){
  const inputID = document.getElementById('inputID').value;
  const inputPass = document.getElementById('inputPass').value;
  const iIDLeng = inputID.length;

  if(iIDLeng > 0){
    const newBtnLogout = document.createElement('button');
    const newBLogoutText = document.createTextNode('Logout');
    newBtnLogout.appendChild(newBLogoutText);
    newBtnLogout.classList.add('btn', 'btn-primary', 'efBtnLogout');
    newBtnLogout.setAttribute('id', 'idBtnLogout');
    console.log(newBtnLogout);

    fBtnLogin.style.visibility = 'hidden';
    fBtnSignup.style.visibility = 'hidden';
    btnRegParent.insertBefore(newBtnLogout, fBtnSignup);

    const fBtnLogout = document.getElementById('idBtnLogout');

    fBtnLogout.addEventListener('click', function(){
      fBtnLogin.style.visibility = 'visible';
      fBtnSignup.style.visibility = 'visible';
      newBtnLogout.style.visibility = 'hidden';

    })


  }
})

