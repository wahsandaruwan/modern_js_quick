const data = {
    name : "Dasun Perera",
    email : "dasun@gmail.com",
    phone : 123446
}

console.log(Object.entries(data));

for(let [key, val] of Object.entries(data)){
    console.log(`${key} : ${val}`);
}