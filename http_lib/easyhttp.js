//make an HTTP get request
function easyHTTP() {
    this.http = new XMLHttpRequest();
}
    easyHTTP.prototype.get = function(url,callback) {
        this.http.open('GET',url,true);

//so that we can use 'this' of this function in scope of other functions ,no need with arrow functions
        let flag = this; 

        this.http.onload = function() {
            if(flag.http.status === 200) {
                callback(null, flag.http.responseText);
            } else {
                callback(`Error: ${flag.http.status}`);
            }
        }
        this.http.send();

    }

    //make an HTTP POST request

    easyHTTP.prototype.post = function(url,data,callback) {
        this.http.open('POST',url,true);
        this.http.setRequestHeader('Content-type', 'application/json');

        let flag = this; 

        this.http.onload = function() {
                callback(null, flag.http.responseText);    
        }

        this.http.send(JSON.stringify(data))
    }
    //makes an http PUT request
    easyHTTP.prototype.put = function(url,data,callback) {
        this.http.open('PUT',url,true);
        this.http.setRequestHeader('Content-type', 'application/json');

        let flag = this; 

        this.http.onload = function() {
                callback(null, flag.http.responseText);    
        }

        this.http.send(JSON.stringify(data))
    }
//makes an http DELETE request
    easyHTTP.prototype.delete = function(url,callback) {
        this.http.open('DELETE',url,true);
        this.http.setRequestHeader('Content-type', 'application/json');

        // let flag = this; 

        this.http.onload = function() {
                callback(null, 'POST deleted !');    
        }

        this.http.send();
    }
