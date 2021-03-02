// console.log(fetch('https://api.nationalize.io/?name=kasun'));
// Create a new user

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'samplep post 1',
        body: 'This is a sample post',
        userId: 11
    })
}).then((res) => {
    if(res.ok){
        return res.json();
    }
    else{
        return Error('Something went wrong!');
    }
}).then((data) => {
    console.log(data);
});