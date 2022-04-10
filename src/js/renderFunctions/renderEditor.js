import { refs } from '../utils';
import Modal from '../components/Modal';
import EditorForm from '../components/EditorForm';
import { onCreateSubmit, onEditSubmit, onCloseFormBtn } from '../actions';

const portal = refs.portalContainer();

const renderEditor = (note = false) => {
  portal.insertAdjacentHTML('beforeend', Modal(EditorForm(note)));
  refs.closeFormBtn().addEventListener('click', onCloseFormBtn);

  if (note) {
    refs.editForm().addEventListener('submit', e => onEditSubmit(e, note));
    return;
  }
  refs.editForm().addEventListener('submit', onCreateSubmit);
};

export default renderEditor;
