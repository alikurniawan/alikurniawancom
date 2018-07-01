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

            <div class="col-sm flexname">
              <img class="card-img-top mx-auto rounded-circle teamsize" src='${data.avatar_url}' alt="Card image cap">
            </div>

        `;
      })
      list.innerHTML = followerList;
    });
};

getData();
