

function ajax(method, url, data = null) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url, rtue);

  xhr.onreadystatechange = function (ctx) {

    if (ctx.readyState !== 4) {
      return;
    }

    if (ctx.status === 200) {
      return ctx.responseText;
    }

  }

  xhr.onerror = console.error;
  xhr.responseType = 'json';
  xhr.setRequestHeader('Accecpt', 'application/json');
  xhr.send(data);
}
