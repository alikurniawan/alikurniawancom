let getData = () => {
  return fetch('https://api.github.com/users/alikurniawan/followers')
    .then(response => {
      return response.json();
    })
    .then(datas => {
      const list = document.getElementById('rowMax');
      let followerList = '';
      datas.map((data, index) => {
        followerList += `
        <div class="col-sm-6 col-md-4 mb-2 animated wobble">
        <div id="cardList" class="card" style="width: 18rem;">
          <img class="card-img-top sizeAvatar circle" src='${data.avatar_url}' alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><label>Name :${data.login}</label></h5>
            <p class="card-text">${data.bio}</p>
            <a href="${data.html_url}" class="btn btn-primary">GitHub</a>
          </div>
        </div>
        </div>
        `;
      })
      list.innerHTML = followerList;
    });
};

getData();
