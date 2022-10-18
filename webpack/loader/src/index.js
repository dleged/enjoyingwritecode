import { createHead, removeHead } from './head';

export const mount = () => {
  createHead();
}

export const unmount = () => {
  removeHead();
}