let main = document.getElementById('main');


let page = 1;
let limit = 20;
let skip = 0;

let url = `https://api.doge-meme.lol/v1/memes/?skip=${skip}&limit=${limit}`;
async function getData() {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data.length)
    console.log(data.data)
    showData(data.data);
}

getData();
function showData(data){
    for(let i = 0; i < data.length; i++){

        let div = document.createElement('div');
        div.className = 'meme';
        if(i%2==1){
            div.className = 'meme1';
        }
        // div.setAttribute("className","little")
        let img = document.createElement('img');
        img.className = 'meme-img';
        img.src = data[i].submission_url;
       

        let title = document.createElement('h5');
        title.innerHTML = data[i].submission_title;
        title.className="title"
    

        div.append(img, title);
        main.append(div);
    }    
}


//Buttons: 

let more = document.getElementById('more');

more.setAttribute('onclick', 'moreMemes()');
// more.addEventListener("scroll",more())

function moreMemes(){
    page++;
    skip = page * limit;
    url = `https://api.doge-meme.lol/v1/memes/?skip=${skip}&limit=${limit}`;
    getData();
}