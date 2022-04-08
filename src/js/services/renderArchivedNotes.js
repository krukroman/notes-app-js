import { getArchivedNotes } from '../utils';
import NoteLIst from '../components/NotesList';
import NotFound from '../components/NotFound';

const renderArchivedNotes = () => {
  const notesWrapper = document.querySelector('.notes__content');
  const notes = getArchivedNotes();
  notesWrapper.textContent = '';
  notesWrapper.insertAdjacentHTML(
    'beforeend',
    notes.length >= 1 ? NoteLIst(notes) : NotFound()
  );
};

export default renderArchivedNotes;
