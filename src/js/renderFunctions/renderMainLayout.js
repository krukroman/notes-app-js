import MainLayOut from '../components/MainLayout';

const renderMainLayout = () => {
  const app = document.getElementById('app');
  app.insertAdjacentHTML('beforeend', MainLayOut());
};

export default renderMainLayout;
