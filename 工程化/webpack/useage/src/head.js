export default function createHead() {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'this is H2 tag';
  h2.onclick = () => h2.innerHTML = 'clicked';
  document.body.appendChild(h2);
}

export const a = {
  a: 1,
  b: 2
}

export const b = {
  a: 1,
  b: 2
}