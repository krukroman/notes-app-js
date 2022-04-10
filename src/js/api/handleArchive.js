import getNotes from './getNotes';
import getIndex from './getIndex';
import saveNotes from './saveNotes';

const handleArchive = id => {
  let notes = getNotes();
  let index = getIndex(id);
  const archiveStatus = notes[index].archived;
  notes[index] = { ...notes[index], archived: !archiveStatus };
  saveNotes(notes);
};

export default handleArchive;
