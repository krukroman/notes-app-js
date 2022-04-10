import { refs } from '../utils';
import Modal from '../components/Modal';
import EditorForm from '../components/EditorForm';

const portal = refs.portalContainer();

const renderEditor = (note = false) => {
  if (note) {
    portal.insertAdjacentHTML('beforeend', Modal(EditorForm(note)));
  } else {
    portal.insertAdjacentHTML('beforeend', Modal(EditorForm()));
  }
};

export default renderEditor;
