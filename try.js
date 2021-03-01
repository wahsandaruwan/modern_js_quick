function getUserCountry(url){
    return new Promise((resolve, reject) => {
        const xmlreq = new XMLHttpRequest();
        xmlreq.open('GET', url);

        xmlreq.onload = () => {
            if(xmlreq.status == 200){
                resolve(xmlreq.response);
            }
            else{
                reject(Error(xmlreq.response));
            }
        }

        xmlreq.onerror = () => {
            reject(Error("Network Error"));
        }

        xmlreq.send();
    });
}

getUserCountry('https://api.nationalize.io/?name=#$%##').then((response) => {
    console.log('Success', response);
}).catch((error) => {
    console.error('Failed', error);
});