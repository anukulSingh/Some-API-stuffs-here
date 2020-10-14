let searchContent = document.querySelector('#myquery').value;
//console.log(searchContent);
document.querySelector('#search').addEventListener('click',getData);



async function getData() {
    const API_KEY = "jh7t0zcfol7EfgSCknIkWd97HxD31r67";
    let response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchContent}&api_key=${API_KEY}&limit=5`)
    let data = await response.json();
    console.log(data);
    console.log(searchContent);

    data.data.forEach(item => {
        let el = document.createElement('img');
        el.src = item.images.original.url;
        el.alt = `${item.id}  `;
        document.querySelector('#output').appendChild(el);

    data = '';
    searchContent ='';
   })
   
}
