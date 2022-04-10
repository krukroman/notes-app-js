import { getNoteId } from '../utils';
import { getById, handleArchive } from '../api';
import renderActiveNotes from '../renderFunctions/renderActiveNotes';
import renderArchivedNotes from '../renderFunctions/renderArchivedNotes';
import renderSummaryList from '../renderFunctions/renderSummary';

const onArchiveBtn = e => {
  const id = getNoteId(e);
  const note = getById(id);
  handleArchive(id);
  note.archived ? renderArchivedNotes() : renderActiveNotes();
  renderSummaryList();
};

export default onArchiveBtn;
