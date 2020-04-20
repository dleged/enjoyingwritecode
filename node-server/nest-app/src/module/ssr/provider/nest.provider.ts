import next from 'next';

export const nextAppFactory = {
    provide: 'NEXT',
    useFactory: async () => {
      const nextApp = next({ dev: process.env.NODE_ENV === 'development' });
      await nextApp.prepare();
      return nextApp;
    },
  };
