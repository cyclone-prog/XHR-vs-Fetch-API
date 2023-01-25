const url = "https://jsonplaceholder.typicode.com/users";

const myAxios = (method, url, body = null) => {
    return fetch(url).then((res)=>{
        return res.json;
    }); // by defaule fetch has get method. Also By default fetch returns promise. so we do not define promise here as in XMLHttpRequest(XHR)
}
myAxios('GET',url).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

