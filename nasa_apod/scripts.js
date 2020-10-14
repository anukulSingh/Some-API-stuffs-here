document.querySelector("#search").addEventListener('click',sendApiRequest);

async function sendApiRequest(){
  const API_KEY = "gwfR4kPdL7RyDNfKIB2wYcVxJwMa0Lz3WpHN6mPa";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
   let data = await response.json();
    console.log(data);
   useApiData(data);
}

function useApiData(data) {
  document.querySelector('#title').textContent = data.title
  document.querySelector('#content').textContent = data.explanation;
  let el = document.createElement('img');
  el.src = data.url;
  el.alt = data.title;
  document.querySelector('#photo').appendChild(el)
}