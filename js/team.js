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
            <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="${data.avatar_url}" alt="">
              <h4>${data.login}</h4>
              <p class="text-muted">Fullstack Developer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        `;
      })
      list.innerHTML = followerList;
    });
};

getData();
