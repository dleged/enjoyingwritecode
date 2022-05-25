const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://api.github.com/?callback=call';

document.body.appendChild(script);

function call(data) {
  console.log(data);
}