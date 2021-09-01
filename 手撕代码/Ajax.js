let xhr = new XMLHttpRequest()
let url = 'https://www.baidu.com'
xhr.open('GET', url, true)

xhr.onreadystatechange = function() {
    if(this.readyState !== 4) {
        return
    }
    if(this.status === 200) {
        console.log(this.responseText);
    }else {
        console.log(this.statusText);
    }
}

xhr.onerror = function() {
    console.log('error!');
}

xhr.send(null)
