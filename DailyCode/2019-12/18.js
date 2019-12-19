httpGet(
  'https://jsonplaceholder.typicode.com/posts/1',
  console.log
);

function httpGet(url,callback){
  let request = new XMLHttpRequest();
  request.open('GET',url,true);
  request.onload = () => callback(request.responseText);
  request.onerror = console.error;
  request.send();
}


function httpPost(url,data,callback){
  let request = new XMLHttpRequest();
  request.open('POST',url,true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = console.error;
  request.send(data);
}

const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
);
