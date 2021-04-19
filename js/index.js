const container = document.querySelector('article.main-content');

const links = document.querySelectorAll('.container .nav button');

let url = 'partials/home.html';

function loadContent(url){
    fetch(url).then(function (rsp) {

        return rsp.text();

    }).then(function (data) {

        container.innerHTML = data;

    });
}

loadContent(url);

function selectContent(em){

    em.preventDefault();
    let element = em.target.value;

    loadContent(element);
}

for (let i = 0; i < links.length; i++) {

  links[i].addEventListener("click", selectContent);

}