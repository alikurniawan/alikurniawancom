//Login
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

// $('#buttonLogin').on('hidden.bs.modal', function (e) {
//   alert('Hello Ali');
// })

function goLogin(){
  let txtId = document.getElementById('txtId').value;
  let txtPassword = document.getElementById('txtPassword').value;

  alert(txtId + '\n' + txtPassword);
}
