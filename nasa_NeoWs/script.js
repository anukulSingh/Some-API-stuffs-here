async function sendApiRequest() {
    const API_KEY = "gwfR4kPdL7RyDNfKIB2wYcVxJwMa0Lz3WpHN6mP";
    const START_DATE = '2020-01-01';
    const END_DATE = '2020-01-03';
    let response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`);
    let data = await response.json();
    console.log(data);
}
sendApiRequest();
// ascii 97