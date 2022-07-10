import article from './article.md';

export function createHead() {
  const h2 = document.createElement('h2');
  h2.innerHTML = article;
  h2.onclick = () => h2.innerHTML = 'clicked';
  window.root.innerHTML = h2;
}

export function removeHead() {
  const h2 = document.createElement('h2');
  h2.innerHTML = article;
  h2.onclick = () => h2.innerHTML = 'clicked';
  window.root.innerHTML = h2;
}

export const a = {
  a: 1,
  b: 2
}

export const b = {
  a: 1,
  b: 2
}