const myAxios = (method, url, body = null) => {
  return new Promise((resolve,reject) => {
    const xhr = new XMlHttpRequest();

    xhr.open(method, url); // this means we are simply starting request to the server.

    xhr.responseType = "json"; //what type of data we want to receive.
    xhr.setRequestHeader("Content-Type", "applications/json"); //telling server what type of data we are sending.

    /****** onload and onerror are event listener which need to define before xhr.send() otherwise it will not work. **********/
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response); 
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    /*****************************************************************************************************************************/

    xhr.send(JSON.stringify(body)); // we need to send request after starting the request.
  });
};
const url = "https://jsonplaceholder.typicode.com/users";

myAxios("GET", url, {
  name: "roshan",
  job: "software developer",
}).then((res)=>{
console.log('message from then b', res );
}).catch(()=>{

});
