fetch('https://www.reddit.com/r/cat.json')
.then((response) => {
    return response.json();
})
.then((data) => {

    let divHolder = document.querySelector('.reddit');

    data.data.children.forEach(e => {
        let div = document.createElement('div'),
            img = document.createElement('img'),
            h1 = document.createElement('h1');

        div.classList.add("reddit__row");
        div.innerHTML = `<h1 class="reddit__title">${e.data.title}</h1> <img class="reddit__image" src="${e.data.thumbnail}">`

        divHolder.appendChild(div)
    })
})
.catch((err) => {
    console.log("Error");
})
