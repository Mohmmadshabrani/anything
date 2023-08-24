document.body.onload = fetchdata();

function fetchdata() {
  fetch("getData.php", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({}),
  })
    .then((r) => r.json())
    .then((data) => {
      loadPage(data);
    });
}

function loadPage(data) {
  main = document.querySelector("main");
  data.forEach((e) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <div class="image">
    <img src=".${e['imageURL']}" />
  </div>
  <div class="content">
    <div class="name">${e['username']}</div>
    <div class="info">
      <div>
        <h1>${e['title']}</h1>
      </div>
      <div>
        <p>
          ${e['description']}
        </p>
      </div>
    </div>
    <div class="categories">
      <div class="category cate1">${e['category']}</div>
    </div>
  </div>`;
    main.prepend(div);
}
  
  );
}
