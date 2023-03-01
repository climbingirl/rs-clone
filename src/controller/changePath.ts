import { router } from '../model/router';

const changePath = (path: string) => {
  history.pushState('', '', path);
  router();
};

export default changePath;
