import { getById } from '../api';
import { getNoteId } from '../utils';
import { renderEditor } from '../renderFunctions';

const onEditBtn = e => {
  const id = getNoteId(e);
  const note = getById(id);
  renderEditor(note);
};

export default onEditBtn;
