import { getActiveNotes } from '../utils';
import NoteLIst from '../components/NotesList';
import NotFound from '../components/NotFound';

const renderActiveNotes = () => {
  const notesWrapper = document.querySelector('.notes__content');
  const notes = getActiveNotes();
  notesWrapper.textContent = '';
  notesWrapper.insertAdjacentHTML(
    'beforeend',
    notes.length >= 1 ? NoteLIst(notes) : NotFound()
  );
};

export default renderActiveNotes;
