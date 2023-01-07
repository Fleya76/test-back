import justifyContent from './justify-content';
import createToken from './create-token';
export default {
  paths: {
    '/token/create': {
      ...createToken,
    },
    '/content/justify': {
      ...justifyContent,
    },
  },
};
