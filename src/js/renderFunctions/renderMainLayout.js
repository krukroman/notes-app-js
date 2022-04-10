import { refs } from '../utils';
import onShowArchivedBtn from '../actions/onShowArchivedBtn.js';
import onCreateBtn from '../actions/onCreateBtn';
import MainLayOut from '../components/MainLayout';

const addEventListeners = () => {
  const showArchivedBtn = refs.showArchivedBtn();
  const createBtn = refs.createNoteBtn();
  showArchivedBtn.addEventListener('click', onShowArchivedBtn);
  createBtn.addEventListener('click', onCreateBtn);
};

const renderMainLayout = () => {
  const app = refs.appContainer();
  app.insertAdjacentHTML('beforeend', MainLayOut());
  addEventListeners();
};

export default renderMainLayout;
