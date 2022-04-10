import { getNoteId } from '../utils';
import { getById } from '../api';
import renderEditor from '../renderFunctions/renderEditor';

const onEditBtn = e => {
  const id = getNoteId(e);
  const note = getById(id);
  renderEditor(note);
};

export default onEditBtn;
