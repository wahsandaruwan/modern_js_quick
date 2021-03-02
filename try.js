const data = {
    name : "Dasun Perera",
    email : "dasun@gmail.com",
    phone : 123446
}

console.log(Object.values(data));

for(let val of Object.values(data)){
    console.log(val);
}