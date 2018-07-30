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
        
          <div class="col">
            <div class="card" style="width: 18rem;">
              <div class="card-header">
              <img src="./img/team/teamIcon.png" alt=""/>
              <span>${data.login}</span>
              </div>
              <div class="card-body">
                <img class="card-img" src="${data.avatar_url}"/>
              </div>
              <div class="card-footer">
                <p class="text-center">Fullstack Dev</p>
              </div>

            </div>
          </div>
        
        `;
      })
      list.innerHTML = followerList;
    });
};

getData();
