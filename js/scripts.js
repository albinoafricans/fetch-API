const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");


// get all posts
async function getAllPosts() {

    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    //esconde elemento 

    loadingElement.classList.add("hide");

    // percorre todos os elementos do retorno dos dados

    data.map((post) => {

        // criação dos elementos manualmente

        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        // popula elementos com os dados

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Ler";

        // setar atribruto href passando o id do post como paramentro

        link.setAttribute("href", `/post.html?id=${post.id}`);

        // inserir elementos na div

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        // inserir divs no container

        postsContainer.appendChild(div);

    })
    
}

getAllPosts();