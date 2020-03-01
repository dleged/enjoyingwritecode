import 'daruk';

declare module 'daruk' {
  interface Context {
    render: (tpl: string) => Promise<any>;
  }
}
