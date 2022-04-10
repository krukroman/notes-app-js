import Modal from '../components/Modal';
import EditorForm from '../components/EditorForm';

const portal = document.getElementById('portal');

const renderEditor = (note = false) => {
  if (note) {
    portal.insertAdjacentHTML('beforeend', Modal(EditorForm(note)));
  } else {
    portal.insertAdjacentHTML('beforeend', Modal(EditorForm()));
  }
};

export default renderEditor;
