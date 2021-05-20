// fetch('https://www.reddit.com/r/cat.json')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {

//     let divHolder = document.querySelector('.reddit');

//     data.data.children.forEach(e => {
//         let div = document.createElement('div'),
//             img = document.createElement('img'),
//             h1 = document.createElement('h1');

//         div.classList.add("reddit__row");
//         div.innerHTML = `<h1 class="reddit__title">${e.data.title}</h1> <img class="reddit__image" src="${e.data.thumbnail}">`

//         divHolder.appendChild(div)
//     })
// })
// .catch((err) => {
//     console.log("Error");
// })
loadDoc();
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax.txt", true);
    xhttp.send();
  }
  redditDoc();
  function redditDoc() {
    var xhttp = new XMLHttpRequest();

    let divHolder = document.querySelector('.reddit');

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        JSON.parse(this.response).data.children.forEach(element => {
        let div = document.createElement('div'),
            img = document.createElement('img'),
            h1 = document.createElement('h1');

        div.classList.add("reddit__row");
        div.innerHTML = `<h1 class="reddit__title">${element.data.title}</h1> <img class="reddit__image" src="${element.data.thumbnail}">`

        divHolder.appendChild(div)
        });
        console.log();
    }
    };
    xhttp.open("GET", "https://www.reddit.com/r/cat.json", true);
    xhttp.send();
  }