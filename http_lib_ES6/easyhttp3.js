
class EasyHttp {
    async get(url) {
       const response = await fetch(url);
       const data = await response.json();
       return data;
    }
    //Make an HTTP post request

    async post(url, data) {
           const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            const data = await response.json();
            return data;
    }

    //make an HTTP PUT request

    async put(url, data) {
       
           const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            const data = await response.json();
            return data;
    }

    //make a delete request
    async delete(url) {
      
            const response = await 
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                },
               
            })
            const data = await 'Deletion successful...';
             return data;
    
    }
}