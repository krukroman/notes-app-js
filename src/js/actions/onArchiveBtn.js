import { getNoteId } from '../utils';
import { getById, handleArchive } from '../api';
import { renderNotes, renderSummaryList } from '../renderFunctions';
import { getActiveNotes, getArchivedNotes } from '../utils';

const onArchiveBtn = e => {
  const id = getNoteId(e);
  const note = getById(id);
  handleArchive(id);
  note.archived
    ? renderNotes(getArchivedNotes())
    : renderNotes(getActiveNotes());
  renderSummaryList();
};

export default onArchiveBtn;
