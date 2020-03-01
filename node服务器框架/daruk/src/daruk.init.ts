import { Daruk } from 'daruk';

// @ts-ignore
const prod = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';

const options = {
  rootPath: __dirname,
  debug: !prod
};

export default new Daruk('daruk', options);
