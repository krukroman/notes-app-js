import { refs } from '../utils';

const portal = refs.portalContainer();

const unmountEditor = () => (portal.textContent = '');

export default unmountEditor;
