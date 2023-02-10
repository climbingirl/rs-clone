import { router } from '../model/router';

const changePath = (e: Event) => {
  history.pushState('', '', (<HTMLElement>e.target).dataset.path);
  router();
};

export default changePath;
